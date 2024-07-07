export interface TypeTaskerPublicInterface {
  register(taskName: string, cb: () => void): void;
  execute(): void;
}
