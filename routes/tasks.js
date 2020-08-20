const express = require("express");
const router = express.Router();

const {
	getTasks,
	getTask,
	addTask,
	updateTask,
	deleteTask,
} = require("../controllers/tasksControllers");

router.route("/").get(getTasks).post(addTask);

router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
