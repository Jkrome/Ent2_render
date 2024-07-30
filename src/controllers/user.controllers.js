const catchError = require('../utils/catchError');
const User = require('../models/User');

const getA = catchError(async (req, res) => {
    const result = await User.findAll() // select * from users;
    return res.json(result)
});

const create = catchError(async (req, res) => {
    const result = await User.create(req.body)
    return res.status(201).json(result)
})

const getOne = catchError(async (req, res) => {
    const { id } = req.params
    const result = await User.findByPk(id)
    return res.json(result)
})

const destroy = catchError(async (req, res) => {
    const { id } = req.params
    const result = await User.destroy({ where: { id } })
    if (!result) return res.status(404).json("User not found")

    return res.sendStatus(204)
})

const updated = catchError(async (req, res) => {
    const { id } = req.params
    const results = await User.update(
        req.body,
        { where: { id } ,returning: true }
    )

    if(results[0] === 0) res.sendStatus(404)

    return res.status(200).json(results[1][0])
})

module.exports = {
    getA,
    create,
    getOne,
    destroy,
    updated
}