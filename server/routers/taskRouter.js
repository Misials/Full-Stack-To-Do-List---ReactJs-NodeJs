const express = require('express');
const { getAllTasks, createTask, updateTask, deleteTask, getTask } = require('../controllers/taskController');

const router = express.Router();

router.route('/tasks').get(getAllTasks).post(createTask);

router.route('/tasks/:id').get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
