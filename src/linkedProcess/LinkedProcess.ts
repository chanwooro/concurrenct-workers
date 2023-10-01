import { Status, StatusType } from "../types";

type RespStatus = "succeed" | "failed";
type ProcessResp = {
    status: RespStatus;
    data: any;
}

export class LinkedProcess {
    private workerId: number;
    public nextProcess: LinkedProcess;
    private status: Status = StatusType.IDLE;
    private result: ProcessResp;

    constructor(private fn: any, private timeout?: number){}

    getResult() {
        return this.result;    
    }

    setWorkerId(id: number) {
        this.workerId = id;
    }

    getStatus() {
        return this.status;
    }

    getWorkerId() {
        return this.workerId;
    }

    async process() {
        try {
            let timeoutFallback: Promise<any>;
            let timer: any = null;
            if(this.timeout) {
                timeoutFallback = new Promise((resolve) => {
                    timer = setTimeout(() => {
                        resolve(`Process took over ${this.timeout} milliseconds`)
                    }, this.timeout);
                })
            }
            this.status = StatusType.INPROGRESS;
            const result = new Promise<ProcessResp>((resolve) => {
                Promise.race([
                    this.fn.then((data: any) => {
                            clearTimeout(timer);
                            resolve({
                                status: "succeed",
                                data
                            })
                        })
                        .catch((e: any) => {
                            resolve({
                                status: "failed",
                                data: e
                            })
                        }), 
                    timeoutFallback
                        ?.then((data) => {
                            resolve({
                                status: "failed",
                                data
                            })
                        })
                        ?.catch((e) => {
                            resolve({
                                status: "failed",
                                data: e
                            })
                        })
                ]);
            })    
            return await result.then((data: ProcessResp) => {
                this.result = data;
                this.status = data.status === "succeed" ? StatusType.COMPLETED : StatusType.ERROR;
                return data;
            });
        }
        catch(e) {
            console.error("Somethign went wrong while running a process", e);
            this.status = StatusType.ERROR;
            this.result = {
                status: "failed",
                data: `Something went wrong while processing. ${e}`
            }
        } 
    }
}