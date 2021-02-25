const Taskadmin = require('express').Router();
const Task = require('../controller/task');
const authentication = require('../middlewares/auth');

Taskadmin.post('/task',authentication.authentication,Task.task);
Taskadmin.post('/updatetask',authentication.authentication,Task.updateTask);
Taskadmin.post('/gettask',authentication.authentication,Task.getTask);

module.exports = Taskadmin;