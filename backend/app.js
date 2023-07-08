const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userRoutes = require('./src/routes/usersRoutes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', userRoutes)

app.listen(3000, () => {
    console.log('Server berjalan pada port 3000')
})