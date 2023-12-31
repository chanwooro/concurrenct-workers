import { LinkedProcess, LinkedProcessManager } from "./linkedProcess";
import { ProcessWorker, ProcessWorkersManager } from "./processWorker";

export class Runner {
    private workersManager: ProcessWorkersManager;
    private linkedProcessManager: LinkedProcessManager;
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
        this.linkedProcessManager = new LinkedProcessManager(callbacks, this.timeout)
        this.linkedProcessManager.createProcesses();
    }

    private getNextAvailableProcessToWorker() {
        const _linkedProcessList = this.linkedProcessManager.getProcesses();
        let nextProcess = this.lastProcess === null ? _linkedProcessList[0] : this.lastProcess?.nextProcess;
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
        const availableProcess = this.linkedProcessManager.getProcesses().map((x) => x.getStatus() === "idle");
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
        return this.linkedProcessManager.getProcesses().map((x) => x.getResult())
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

