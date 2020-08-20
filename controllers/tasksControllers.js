const createError = require("http-errors");
const task = require("../models/task");

// 1 GET TASKS
exports.getTasks = async (req, res, next) => {
	try {
		console.log("GET TASKS");
		const tasks = await task.find();
		res.status(200).send(tasks);
	} catch (err) {
		res.status(500).send(err);
	}
};

// 2 GET TASK 
exports.getTask = async (req, res, next) => {
	try {
		console.log("GET TASK");
		const newTask2 = await task.findById(req.params.id);
		if (!newTask2) throw new createError.NotFound();
		res.status(200).send(newTask2);
	} catch (err) {
		res.status(500).send(err);
	}
};

// 3 POST TASK
exports.addTask = async (req, res, next) => {
	try {
		console.log("POST TASK");
		const newTask3 = new task(req.body);
		await newTask3.save();
		res.send(newTask3);
	} catch (err) {
		res.status(500).send(err);
	}
};

// 4 UPDATE TASK 
exports.updateTask = async (req, res, next) => {
	try {
		console.log("UPDATE TASK");
		const newTask4 = await task.findByIdAndUpdate(req.params.id, req.body);
		await newTask4.save();
		if (!newTask4) throw new createError.NotFound();
		res.status(200).send(newTask4);
	} catch (err) {
		res.status(500).send(err);
	}
};

// 5 DELETE TASK 
exports.deleteTask = async (req, res, next) => {
	try {
		console.log("DELETE TASK");
		const newTask5 = await task.findByIdAndDelete(req.params.id);
		if (!newTask5) throw new createError.NotFound();
		res.status(200).send(newTask5);
	} catch (err) {
		res.status(500).send(err);
	}
};
