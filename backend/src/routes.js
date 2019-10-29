const express = require('express');

const routes = express.Router();

const HabitController = require('./controllers/HabitController')

routes.get("/habits", HabitController.index)
routes.get('/habits/:id', HabitController.show)
routes.post("/habits", HabitController.store)
routes.delete("/habits/:id", HabitController.delete)
routes.put('/habits/:id', HabitController.update)
module.exports = routes;
