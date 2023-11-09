const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/product.router");
// const userRouter = require("./routes/user.router");
const {SERVER_PORT, SERVER_HOST} = require("../env.json");

const app = express();

const corsOptions = { origin: `http://${SERVER_HOST}:${SERVER_PORT}` };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(SERVER_PORT, () => {
  console.log(`Running app on port=${SERVER_PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json("The server is running....");
});

app.get("/api", (req, res) => {
  res.status(200).json("Hello in the API");
});

app.use("/api/products", productRouter);
// app.use("/api/reviews", reviewRouter);
