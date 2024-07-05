export interface Task {
  taskName: string;
  cb: () => any;
}
export interface TypeTaskerPublicInterface {
  register(taskName: string, cb: () => void): void;
  execute(): void;
}
