const express = require("express");
const router = express.Router();

const {
	getTasks,
	getTask,
	// updateTask,
	// deleteTask,
	// addTask,
} = require("../controllers/tasksControllers");

router.route("/").get(getTasks);
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);

module.exports = router;
