const mongoose = require("mongoose")

const Habit = mongoose.model("Habit")

module.exports = {
    async index(req, res) {
        const habit = await Habit.find()

        return res.json(habit)
    },

    async show(req, res) {
        const habit = await Habit.findById(req.params.id)

        return res.json(habit)
    },

    async store(req, res) {
        const habit = await Habit.create(req.body)

        return res.json(habit)
    },

    async delete(req, res) {
        await Habit.findByIdAndRemove(req.params.id)

        return res.send()
    },

    async update(req, res) {
        const habit = await Habit.findByIdAndUpdate(req.params.id, req.body,
            { new: true })

        return res.json(habit)
    }
}