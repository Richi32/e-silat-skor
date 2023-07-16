const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const userRoutes = require('./src/routes/usersRoutes')
const arenaRoutes = require('./src/routes/arenaRoutes')
const atlitRoutes = require('./src/routes/atlitRoutes')

// Middleware untuk menyimpan status login dan role
app.use((req, res, next) => {
    req.user = {
        isLoggedIn: false,
        role: '',
    };
    next();
});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', userRoutes)
app.post('/users/logout', userRoutes);

app.use('/arena', arenaRoutes)
app.use('/atlit', atlitRoutes)

app.listen(5000, () => {
    console.log('Server berjalan pada port 3000')
})