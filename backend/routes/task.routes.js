const express = require('express')
const router = express.Router();

const { getAllTasks, getTaskByCode, createTask, updateTask, deleteTask,
  printMessage
 } = require('../controllers/task.controller')


router.get("/", getAllTasks)
router.get("/:code", getTaskByCode)
router.post("/", createTask)
router.put("/:Id", updateTask)
router.delete("/:Id", deleteTask)
router.post("/message", printMessage)

module.exports = router;
