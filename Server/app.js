const express = require("express");
const cors = require("cors");

// Routers
const { usersRouter } = require("./routes/users.routes");
const { gamesRouter } = require("./routes/games.routes");
const { consolesRouter } = require("./routes/consoles.routes");

// Global error controller
const { globalErrorHandler } = require("./controllers/error.controller");

// Utils
const { AppError } = require("./utils/appError.util");

// Init express app
const app = express();

app.use(express.json());

app.use(cors());

// Endpoints
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/games", gamesRouter);
app.use("/api/v1/consoles", consolesRouter);

app.all("*", (req, res, next) => {
  next(
    new AppError(
      `${req.method} ${req.originalUrl} not found in this server`,
      404
    )
  );
});

app.use(globalErrorHandler);

module.exports = { app };
