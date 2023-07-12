const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userRoutes = require('./src/routes/usersRoutes')
const arenaRoutes = require('./src/routes/arenaRoutes')
const atlitRoutes = require('./src/routes/atlitRoutes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', userRoutes)
app.use('/arena', arenaRoutes)
app.use('/atlit', atlitRoutes)

app.listen(5000, () => {
    console.log('Server berjalan pada port 3000')
})