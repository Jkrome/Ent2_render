const { getA, create, getOne, destroy, updated } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
    .get(getA)
    .post(create)

userRouter.route("/:id")
    .get(getOne)
    .delete(destroy)
    .put(updated)

module.exports = userRouter;