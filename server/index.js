const app = require("./src/app");
const connectDb = require("./src/config/db");
const util = require("./src/config/util");

const startServer = async () => {
  await connectDb();
  const port = util.port || 5000;
  app.listen(port, () => {
    console.log(`app listening at port ${port}`);
  });
};

startServer();
