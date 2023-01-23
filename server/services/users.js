const db = require("./db")
const helper = require("../helper")
const config = require("../config")
const bcrypt = require("bcrypt")
const saltRounds = 10

async function getMultiple(page = 1) {
     const offset = helper.getOffset(page, config.listPerPage)
     const query = `SELECT * FROM Users LIMIT ${offset} , ${config.listPerPage}`
     const rows = await db.query(query)
     const data = helper.emptyOrRows(rows)
     const meta = {page}
     return {
          data,
          meta
     }
}

async function registerUser(user) {
     const query = `
     INSERT INTO Users(Username, Password, Email, Role)
     VALUES (?, ?, ?, "User");
     `
     let message = `Error in creating user`
     const salt = bcrypt.genSaltSync(saltRounds)
     const hash = bcrypt.hashSync(user.Password, salt)
     try {
          const result = await db.query(query, [user.Username, hash, user.Email])     
          if(result.affectedRows) {
               message = `User created successfully`
          }
     } catch(err) {
          if(err.code == 'ER_DUP_ENTRY') {
               console.log("User Exists")
               message = "User Exists"
          }
     }
     return message
}

async function modifyUser(id, user) {
     const [query, parameters] = helper.constructModify(id, user)
     parameters.push(id)
     const result = await db.query(query, parameters)
     
     let message = 'Error in modifying user'
     if(result.affectedRows) {
          message = 'User modified successfully'
     }
     console.log(message)
     return message
}

async function deleteUser(id) {
     const query = "DELETE FROM Users WHERE UserID = ?"
     const result = await db.query(query, [id])
     let message = 'Error in deleting user'
     if(result.affectedRows) {
          message = 'User deleted successfully'
     }
     console.log(message)
     return message
}

module.exports = {
     getMultiple,
     registerUser,
     modifyUser,
     deleteUser
}