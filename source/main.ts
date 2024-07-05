import { TypeTaskerEngine } from "./engine/engine.js";

export function version(): string{
    return '0.0.1'
}

export interface Task {
    taskName:string
}

export default class TypeTasker{
    register(taskName: string, cb: () => void) {
        throw new Error("Method not implemented.");
    }
    private engine = new TypeTaskerEngine()
    private tasks: Task[] = []; 
    constructor(){

    }

}