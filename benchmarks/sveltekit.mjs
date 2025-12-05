import { createServer } from "node:http";
import { handler } from "./sveltekit-app/build/handler.js";

createServer(handler).listen(3000, "127.0.0.1");
