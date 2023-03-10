const express = require("express")
const router = express.Router()
const users = require("../services/users")

router.get('/', async function(req, res, next) {
     try {
          res.json(await users.getMultiple(req.query.page))
     } catch(err) {
          console.error(`Error while getting users: ${err.message}`)
          next(err)
     }
})

router.post('/', async function(req, res, next) {
     try {
          res.json(await users.registerUser(req.body))
     } catch(err) {
          console.error(`Error while creating user: ${err.message}`)
          next(err)
     }
})

router.put("/:id", async function(req, res, next) {
     try {
          res.json(await users.modifyUser(req.params.id, req.body))
     } catch(err) {
          console.error(`Error while updating user: ${err.message}`)
          next(err)
     }
})

router.delete("/:id", async function(req, res, next) {
     try {
          res.json(await users.deleteUser(req.params.id))
     } catch(err) {
          console.error(`Error while deleting user: ${err.message}`)
          next(err)
     }
})

module.exports = router