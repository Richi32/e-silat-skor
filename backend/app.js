const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');

const userRoutes = require('./src/routes/usersRoutes')
const arenaRoutes = require('./src/routes/arenaRoutes')
const atlitRoutes = require('./src/routes/atlitRoutes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.use('/users', userRoutes)
app.post('/users/logout', userRoutes);

app.use('/arena', arenaRoutes)
app.use('/atlit', atlitRoutes)

app.listen(5000, () => {
    console.log('Server berjalan pada port 3000')
})