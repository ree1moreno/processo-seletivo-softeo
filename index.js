const express = require("express");
require("express-async-errors");
const dotenv = require("dotenv");
const cors = require("cors");

const clientRouter = require("./backend/src/routes/index");
const { errorMiddleware } = require("./backend/src/middlewares");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", clientRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
