import { LinkedProcess } from "./LinkedProcess";

export class LinkedProcessManager {
  private linkedProcesses: LinkedProcess[];
  
  constructor(private callbacks: any[], private timeout?: number) {}

  createProcesses() {
    const list: LinkedProcess[] = [];
    let prevCallback: LinkedProcess | null = null;
    for(const fn of this.callbacks) {
        const linkedProcess = new LinkedProcess(fn, this.timeout);
        list.push(linkedProcess);
        if(prevCallback) {
            prevCallback.nextProcess = linkedProcess;
        }
        prevCallback = linkedProcess;
    }
    this.linkedProcesses = list;
  }

  getProcesses() {
      return this.linkedProcesses;
  }

  getAvailableWorkers() {
    return this.linkedProcesses.map((process) => process.getStatus() !== "inprogress");
  }
}