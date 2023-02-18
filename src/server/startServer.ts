import { app, port } from "./index.js";

const startServer = () => {
  app.listen(port);
};

export default startServer;
