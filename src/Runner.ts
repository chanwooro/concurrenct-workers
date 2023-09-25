import { LinkedProcess } from "./LinkedProcess";
import { ProcessWorker } from "./ProcessWorker";
import { ProcessWorkersManager } from "./ProcessWorkersManager";

export class Runner {
    private linkedProcessList: LinkedProcess[] = [];
    private workersManager: ProcessWorkersManager;
    private lastProcess: LinkedProcess | null = null;
    private status: "idle" | "no_more_processes" = "idle";

    constructor(callbacks: any[], private concurrency: number = 3, private timeout?: number) {
        this.setConcurrency(callbacks);
        this.generateWorkers();
        this.generateLinkedProcesses(callbacks);
    }
    
    private setConcurrency(callbacks: any[]) {
        if(this.concurrency > callbacks.length) {
            this.concurrency = callbacks.length;
        }
    }

    private generateWorkers() {
        this.workersManager = new ProcessWorkersManager(this.concurrency);
        this.workersManager.createWorkers();
    }

    private generateLinkedProcesses(callbacks: any[]) {
        const list: LinkedProcess[] = [];
        let prevCallback: LinkedProcess | null = null;
        for(const fn of callbacks) {
            const linkedProcess = new LinkedProcess(fn, this.timeout);
            list.push(linkedProcess);
            if(prevCallback) {
                prevCallback.nextProcess = linkedProcess;
            }
            prevCallback = linkedProcess;
        }
        this.linkedProcessList = list;
    }

    private getNextAvailableProcessToWorker() {
        let nextProcess = this.lastProcess === null ? this.linkedProcessList[0] : this.lastProcess?.nextProcess;
        while(nextProcess && nextProcess.getWorkerId()) {
            nextProcess = nextProcess.nextProcess;
        }
        if(nextProcess){
            this.lastProcess = nextProcess;
        }
        return nextProcess || null;
    }

    private async executeProcess(worker: ProcessWorker) {
        // Each worker will run recurssively until there's no processes to execute
        
        //debugging
        const availableProcess = this.linkedProcessList.map((x) => x.getStatus() === "idle");
        console.log("availableProcess: ", availableProcess)
        console.log("workerId: ", worker.getId())

        const nextProcess = this.getNextAvailableProcessToWorker();
        if(nextProcess){
            worker.setProcess(nextProcess);
            console.log("Starting next process worker id:", worker.getId())
            const _resp = await worker.execute();
            console.log("Process is done ", _resp);
            await this.executeProcess(worker);
        } else {
            this.status = "no_more_processes"
        }
        return;
    }

    private async processWorkers() {
        // This will trigger workers
        const workers = this.workersManager.getWorkers().map(async (worker) => this.executeProcess(worker));

        // Todo: find alternative way other than Promise.all/allSettled as there's some memory limitations with no validation around to it.
        await Promise.allSettled(workers);
        return this.getResults();
    }

    public getResults() {
        return this.linkedProcessList.map((x) => x.getResult())
    }

    public async execute() {
        try{
            const results = await this.processWorkers();
            return results;
        }
        catch(e) {
            throw new Error(`Something went wrong while processing workers ${e}`)
        }
    }
}

