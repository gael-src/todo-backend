const express = require("express");
const router = express.Router();

const {
	getTask,
	// updateTask,
	// deleteTask,
	// addTask,
} = require("../controllers/tasksControllers");

// router.route("/").get(getTasks).post(addTask);
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

module.exports = router;
