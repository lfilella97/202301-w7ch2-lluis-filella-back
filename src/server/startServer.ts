import { app } from "./index.js";
import debug from "debug";
const createDebug = debug("a-server:server");

const startServer = (port: number) => {
  app.listen(port, () => {
    createDebug(`Server started at http://localhost:${port}`);
  });
};

export default startServer;
