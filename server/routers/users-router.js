let { Router } = require('express');
let { getUsers, deleteUser, addUser, getUser, updateUser } = require('../controllers/users-controller');
let fs = require('fs');

let usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUser);
usersRouter.put("/", updateUser);
usersRouter.delete("/:id", deleteUser);
usersRouter.post("/", addUser);

module.exports = usersRouter;