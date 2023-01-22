const express = require('express')
const cors = require('cors');
const app = express()
const port = 4000
const usersRouter = require("./routes/users")
const authRouter = require("./routes/auth")

app.use(express.json())
app.use(
     express.urlencoded({extended: true})
)
app.get('/', (req, res) => {
     res.json({message: "ok"})
})
app.use(cors({
    origin: 'http://127.0.0.1:3000'
}));
app.use("/users", usersRouter)
app.use("/auth", authRouter)
app.use((err, req, res, next) => {
     const statusCode = err.statusCode || 500
     console.error(err.message, err.stack)
     res.status(statusCode).json({message: err.message})
     return
})
app.listen(port, () => {
     console.log(`Listening on ${port}`)
})