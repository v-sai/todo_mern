require("dotenv").config();
require("express-async-errors");

// express
const express = require("express");
const app = express();

// rest of the packages
const cookieParser = require("cookie-parser");

// database
const connectDB = require("./db/connect");

// routers
const authRouter = require("./routes/authRoutes");

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use("/api/v1/auth", authRouter);

app.use((err, req, res, next) => {
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
