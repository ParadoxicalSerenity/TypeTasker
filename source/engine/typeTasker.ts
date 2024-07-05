import { Task, TypeTaskerEngine } from "./engine.js";

export default class TypeTasker{
    register(taskName: string, cb: () => void) {
        this.tasks.push({
            taskName:taskName,
            cb:cb
        })
    }
    execute(){
        this.tasks.every((value,index)=>{
            console.log(`DidRun + ${index}`)
            value.cb()
            if (index === this.tasks.length) return false;
            return true
        })
    }
    private engine = new TypeTaskerEngine()
    private tasks: Task[] = []; 
    constructor(){

    }

}

