const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const tasksRouter = require("./routes/tasks");
const app = express();
const cors = require("cors");

app.set("port", process.env.PORT || 3002);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost:27017/tasks", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);

// CORS

app.use(cors());

app.get("/products/:id", function (req, res, next) {
	res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(3001, function () {
	console.log("CORS-enabled web server listening on port 3001");
});

module.exports = app;
