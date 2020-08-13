const createError = require("http-errors");
const Task = require("../models/Task");

// 1
exports.getTasks = async (req, res, next) => {
	const tasks = await Task.find();
	res.status(200).send(tasks);
};

// 2
exports.getTask = async (req, res, next) => {
	try {
		const task = await Task.find();
		if (!task) throw new createError.NotFound();
		res.status(200).send(task);
	} catch (e) {
		next(e);
	}
};

// 3
// exports.addTask = async (req, res) => {
// 	const task = new Task(req.body);
// 	try {
// 		await task.save();
// 		res.send(task);
// 	} catch (err) {
// 		res.status(500).send(err);
// 	}
// };

// 4
// exports.deleteTask = async (req, res) => {
// 	try {
// 		const task = await Task.findByIdAndDelete(req.params.id);
// 		if (!task) res.status(404).send("No item found");
// 		res.status(200).send();
// 	} catch (err) {
// 		res.status(500).send(err);
// 	}
// };

// 5
// exports.updateTask = async (req, res) => {
// 	try {
// 		const task = await Task.findByIdAndUpdate(req.params.id, req.body);
// 		await task.save();
// 		res.status(200).send(task);
// 	} catch (err) {
// 		res.status(500).send(err);
// 	}
// };
