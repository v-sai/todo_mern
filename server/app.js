require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// database
const connectDB = require("./db/connect");

// routers
const authRouter = require("./routes/authRoutes");

app.use(express.json());

app.use("/api/v1/auth", authRouter);

app.use((err, req, res, next) => {
  // console.log(err.message);
  return res.status(404).json({ err: err.message });
});

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
