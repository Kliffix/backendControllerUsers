const express = require('express')
const usersRouter = require('./routers/usersRouter')

const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use('/api', usersRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})