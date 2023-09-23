

export class LinkedProcess {
    private workerId: number;
    public nextProcess: LinkedProcess;
    private status: string = "idle";

    constructor(private fn: any, private timeout?: number){}

    setWorkerId(id: number) {
        this.workerId = id;
    }

    getStatus() {
        return this.status;
    }

    getWorkerId() {
        return this.workerId;
    }

    async process(...args: any) {
        try {
            let timeoutFallback;
            if(this.timeout) {
                timeoutFallback = new Promise((_, reject) => {
                    setTimeout(() => {
                        console.log("it took too long");
                        reject(`Process took over ${this.timeout} milliseconds`)
                    }, this.timeout);
                })
            }
            const process = this.fn(...args);
            this.status = "inprogress";
            const result = await Promise.race([process, timeoutFallback]);
            this.status = "completed";
    
            return result;
        }
        catch(e) {
            console.log("Somethign went wrong while running a process", e)
        } 
    }
}