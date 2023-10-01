import { ProcessWorker } from "./ProcessWorker";


export class ProcessWorkersManager {
    private workers: ProcessWorker[];

    constructor(private concurrency: number = 3) {
        this.createWorkers();
    }

    createWorkers() {
        const workers: ProcessWorker[] = [];
        for(let i = 0 ; i < this.concurrency; i++) {
            workers.push(new ProcessWorker(i + 1));
        }
        this.workers = workers;
    }

    getWorkers() {
        return this.workers;
    }

    getAvailableWorkers() {
         return this.workers.map((worker) => worker.getStatus() !== "inprogress");
    }
}