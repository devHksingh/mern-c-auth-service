// import createError from "http-errors";
import app from "./app";
import { Config } from "./config/index";
import logger from "./config/logger";

const startServer = () => {
  const port = Config.PORT;

  try {
    // const testerr = createError(401,"Testing Error handling")
    // throw testerr
    app.listen(port, () => {
      logger.debug("DEBUB MESSAGE");
      logger.info(`Listening on port ${port}`);
    });
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message);

      setTimeout(() => {
        process.exit(1);
      }, 1000);
    }
  }
};

startServer();
