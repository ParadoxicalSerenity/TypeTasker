export function version(): string{
    return '0.0.1'
}

export interface Task {
    taskName:string
}

export default class TypeTasker{
    private tasks: Task[] = [];
    constructor(){

    }
    
}