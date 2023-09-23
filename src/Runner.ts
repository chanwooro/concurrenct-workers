import { LinkedProcess } from "./LinkedProcess";
import { ProcessWorker } from "./ProcessWorker";
import { ProcessWorkersManager } from "./ProcessWorkersManager";

export class Runner {
    private linkedProcessList: LinkedProcess[] = [];
    private workersManager: ProcessWorkersManager;
    private lastProcess: LinkedProcess | null = null;
    private results: any = [];

    constructor(callbacks: any[], private concurrency: number = 3, private timeout = 3000) {
        this.workersManager = new ProcessWorkersManager(this.concurrency);
        this.generateWorkers();
        this.generateLinkedProcesses(callbacks);
    }

    private generateWorkers() {
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
        while(nextProcess && !nextProcess.getWorkerId()) {
            nextProcess = nextProcess.nextProcess;
        }
        if(nextProcess){
            this.lastProcess = nextProcess;
        }
        return nextProcess || null;
    }

    private async executeProcess(worker: ProcessWorker) {
        // Each worker will run recurssively until there's no processes to be execute
        
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
            this.results.push(_resp);
            this.executeProcess(worker);
        }
    }

    private async processWorkers() {
        // This will trigger workers
        const workers = this.workersManager.getWorkers();
        for(const worker of workers) {
            this.executeProcess(worker);
        }
    }
    
    public async execute() {
        await this.processWorkers();
        return this.results;
    }
}


const process = [
    async () => {
        setTimeout(() => {
            console.log("aaa")
            return "aaa";
        }, 10000)
    },
    async () => {
        setTimeout(() => {
            console.log("bbb")
            return "bbb";
        }, 3000)
    }, 
    async () => {
        setTimeout(() => {
            console.log("ccc")
            return "ccc";
        }, 4000)
    },
    async () => {
        setTimeout(() => {
            console.log("ddd")
            return "ddd";
        }, 1000)
    },
    async () => {
        setTimeout(() => {
            console.log("eee")
            return "eee";
        }, 2000)
    },
    async () => {
        setTimeout(() => {
            console.log("fff")
            return "fff";
        }, 20000)
    }
]