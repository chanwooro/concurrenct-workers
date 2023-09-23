import { LinkedProcess } from "./LinkedProcess";

export class ProcessWorker {
    
    private status: string = "idle";
    private linkedProcess: LinkedProcess | null = null

    constructor(private id: number) {}

    setProcess(process: LinkedProcess) {
        this.linkedProcess = process;
        if(!this.linkedProcess.getWorkerId()){
            this.linkedProcess.setWorkerId(this.id);
        }
    }

    getId() {
        return this.id;
    }
    //debugging purpose
    getProcess() {
        return this.linkedProcess;
    }

    getStatus() {
        return this.status;
    }

    async execute(...args: any) {
        if(!this.linkedProcess) return;
        this.status = "inprogress";
        const result = await this.linkedProcess.process(...args);
        this.status = "completed";
        return result;
    }
}