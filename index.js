const express = require("express");
const cors = require("cors");
require("dotenv").config();

const path = require("path");
const fileupload = require("express-fileupload");

//routers
const userRouter = require("./Routes/user");

const connectDB = require("./db");
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
// app.use(
//   fileupload({
//     // limits: { fileSize: 2 * 1024 * 1024 }, // 2mb
//     // abortOnLimit: true, // if limit is reached return 413
//     createParentPath: true,
//     useTempFiles: true,
//   })
// );

app.use("/public", express.static(path.join(__dirname, "/public")));
// app.use(express.static(path.join(__dirname, 'build')));

app.use("/", userRouter);

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`server is running 0n localhost:${port}`);
});
