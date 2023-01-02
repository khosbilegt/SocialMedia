const express = require("express")
const router = express.Router()
const auth = require("../services/auth")

router.get('/login', async function(req, res, next) {
     try {
          res.json(await auth.login(req.body))
     } catch(err) {
          console.error(`Error while logging in: ${err.message}`)
          next(err)
     }
})

module.exports = router