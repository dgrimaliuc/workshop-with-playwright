import { v4 as uuidv4 } from "uuid";

export function getRandomUUID(): string {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
  const randomUUID: string = uuidv4();
  return randomUUID;
}
