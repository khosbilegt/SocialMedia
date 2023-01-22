const db = require("./db")
const helper = require("../helper")
const bcrypt = require("bcrypt")

async function login(user) {
     console.log(user.Email, user.Password)
     const query = `
          SELECT Password from Users
          WHERE Email = ?
     `
     const rows = await db.query(query, [user.Email])
     const data = helper.emptyOrRows(rows)
     const notFound = {
          text: "Not Found"
     }
     if(!data[0]) { // Email not found
          return notFound
     }
     if(bcrypt.compareSync(user.Password, data[0].Password)) {
          return createToken(user)
     }
     return notFound
}

async function createToken(user) {
     // Delete previous tokens
     const deleteQuery = `DELETE FROM Tokens WHERE Email = ?`
     const res = await db.query(deleteQuery, [user.Email])

     // Create new token
     const insertQuery = `
          INSERT INTO Tokens
          VALUES (?, "Bearer", NOW(), ADDTIME(NOW(), "01:00:00"), ?);
     `
     const string = user.Email + Date.now().toString()
     const salt = bcrypt.genSaltSync(10)
     const hash = bcrypt.hashSync(string, salt).replace(/\W/g, '')
     const result = await db.query(insertQuery, [hash, user.Email])
     let message = `Authentication Error`
     if(result.affectedRows) {
          message = {
               email: user.Email,
               token: hash,
               expires_in: 3600
          }
     }
     console.log(message)
     return message
}

module.exports = {
     login
}