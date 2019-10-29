const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const requireDir = require("require-dir")

const app = express();
app.use(express.json());

app.use(cors())

mongoose.connect("mongodb+srv://omnistack:omnistack@omnistack-zzpg8.mongodb.net/habit?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

requireDir("./src/models");

const Habit = mongoose.model('Habit');

app.use("/api", require("./src/routes"))

app.listen(3333);






















// GET (buscar informação), POST (criar informação), PUT (editar informação), DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição ou delete)
// req.body = Acessar corpo da requisição (para criação e edição)
