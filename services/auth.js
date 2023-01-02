const db = require("./db")
const helper = require("../helper")
const bcrypt = require("bcrypt")

async function login(user) {
     const query = `
          SELECT Password from Users
          WHERE Email = ?
     `
     const rows = await db.query(query, [user.Email])
     const data = helper.emptyOrRows(rows)
     if(bcrypt.compareSync(user.Password, data[0].Password)) {
          createToken()
     }
     const notFound = {
          text: "Not Found"
     }
     return notFound
}

async function createToken(user) {
     const query = `
          INSERT INTO Tokens
          VALUES (?, "Bearer", NOW(), ADDTIME(NOW(), "01:00:00"))
     `
     const result = await db.query(query, [1000])
     let message = `Error in authenticating`
     if(result.affectedRows) {
          message = `Logged in successfully`
     }
     console.log(message)
     return message
}

module.exports = {
     login
}