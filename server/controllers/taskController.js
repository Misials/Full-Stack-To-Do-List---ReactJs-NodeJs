const Task = require('../models/taskModel');

exports.getAllTasks = async (req, res) => {
	const tasks = await Task.find();
	if (!tasks) return res.status(204).json({ message: 'There is no task yet..' });
	res.status(200).json({ tasks });
};

exports.createTask = async (req, res) => {
	if (!req.body.text) return res.status(400).json({ message: 'Task content is required!' });

	const newTask = {
		text: req.body.text,
		created: new Date(),
		isDone: false,
	};

	await Task.create(newTask);
	res.status(201).json({ task: newTask });
};

exports.updateTask = async (req, res) => {
	if (!req.params.id) return res.status(400).json({ message: 'Task Id is required' });

	const task = await Task.findById(req.params.id);

	if (!req.body.text) return res.status(400).json({ message: 'Text param is required' });

	task.text = req.body.text;
	await task.save();

	res.status(200).json({ task });
};

exports.deleteTask = async (req, res) => {
	if (!req.params.id) return res.status(400).json({ message: 'Task Id is required' });

	await Task.findByIdAndRemove(req.params.id);

	res.status(200).json({ message: `Task with id ${req.params.id} deleted` });
};

exports.getTask = async (req, res) => {
	const taskId = req.params.id;
	if (!taskId) return res.status(400).json({ message: 'Task ID required!' });
	const task = await Task.findById(taskId);
	if (!task) return res.status(400).json({ message: 'There is no task with that ID' });
	res.status(200).json({ task });
};
