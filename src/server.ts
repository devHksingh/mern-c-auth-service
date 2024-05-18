import app from "./app";
import { Config } from "./config/index";

const startServer = () => {
  const port = Config.PORT;
  try {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running on ${port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    process.exit(1);
  }
};

startServer();
