require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const TodoRouter = require("./routers/todoRouter");

app.use(bodyParser.json());

app.use(cors());

app.use("/api/v1/todo", TodoRouter);

require("./config/db");
connectDB();
app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
