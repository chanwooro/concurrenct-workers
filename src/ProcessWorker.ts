import { LinkedProcess } from "./LinkedProcess";
import { Status, StatusType } from "./types";

export class ProcessWorker {
    
    private status: Status = StatusType.IDLE;
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

    async execute() {
        if(!this.linkedProcess) return;
        this.status = StatusType.INPROGRESS;
        const result = await this.linkedProcess.process();
        this.status = StatusType.COMPLETED;
        return result;
    }
}