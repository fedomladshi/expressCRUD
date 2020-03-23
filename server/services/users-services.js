const fs = require("fs");

const fileData = fs.readFileSync(__dirname + '/../../users.json', 'utf8');
const usersData = JSON.parse(fileData);

const get = () => usersData;

const removeUser = (id) => {
     const allUsersWithoutDeletedOne = usersData.filter(user => user.id !== Number(id));
     const deletedUser = usersData.filter(user => user.id == Number(id));
     writeFile(allUsersWithoutDeletedOne);
     return deletedUser[0];
}

const add = body => {
     let newData = {id: usersData.length+1, ...body };
     usersData.push(newData);
     writeFile(usersData);
     return newData;
}

const writeFile = (users) => {
     fs.writeFileSync(__dirname + "/../../users.json", JSON.stringify(users));
}

const update = (userData) => {
     const updatedUser = usersData.map(user => {
         if(String(user.id) == userData.id) {
             return { ...user, ...userData };
         } else {
              return {...user}
         }
     })
     writeFile(updatedUser);
     return updatedUser.id;
 };

module.exports = { get, removeUser, add, update};