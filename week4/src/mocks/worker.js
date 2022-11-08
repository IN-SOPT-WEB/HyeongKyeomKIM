import { setupWorker } from "msw";
import { Handlers } from "./Handlers";

export const worker = setupWorker(...Handlers);
