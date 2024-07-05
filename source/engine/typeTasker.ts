import { Task, TypeTaskerEngine } from "./engine.js";

export default class TypeTasker{
    register(taskName: string, cb: () => void) {
        cb()
    }
    private engine = new TypeTaskerEngine()
    private tasks: Task[] = []; 
    constructor(){

    }

}

