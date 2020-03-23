const { get, removeUser, add, update } = require('../services/users-services')
let fs = require('fs');

class UsersController {

     getUsers(req, res) {
          const usersData = get();
          res.json(usersData);
     }
     deleteUser(req, res) {
          try {
               const usersData = removeUser(req.params.id);
               res.json(usersData);
          } catch (err) {
               res.json({ message: err.message })
          }
     }
     addUser(req, res) {
          try {
               let addedUser = add(req.body);
               res.json({ message: "User is created", addedUser });
          } catch (err) {
               res.json({ message: err.message })
          }
     }
     getUser(req, res) {
          try {
               let usersData = get();
               let user = usersData.filter(user => user.id == req.params.id)
               res.json({ user })
          } catch (err) {
               res.json({ message: err.message })
          }
     }
     updateUser(req, res) {
          try {
              let id = update(req.body);
              res.json({ message: "User is updated", userId: id});
          } catch (err) {
              res.status(400).json({ message: err.message});
          }
      }
}

let { getUsers, deleteUser, addUser, getUser, updateUser } = new UsersController();
module.exports = { getUsers, deleteUser, addUser, getUser, updateUser };