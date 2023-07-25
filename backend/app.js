const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');

const userRoutes = require('./src/routes/usersRoutes')
const arenaRoutes = require('./src/routes/arenaRoutes')
const atlitRoutes = require('./src/routes/atlitRoutes')
const timRoutes = require('./src/routes/timRoutes')
const partaiRoutes = require('./src/routes/partaiRoutes')
const rondeRoutes = require('./src/routes/rondeRoutes')
const nilaiRoutes = require('./src/routes/nilaiRoutes')
const penilaianRoutes = require('./src/routes/penilaianRoutes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.use('/api/users', userRoutes)
app.use('/api/arena', arenaRoutes)
app.use('/api/atlit', atlitRoutes)
app.use('/api/tim', timRoutes)
app.use('/api/partai', partaiRoutes)
app.use('/api/ronde', rondeRoutes)
app.use('/api/nilai', nilaiRoutes)
app.use('/api/penilaian', penilaianRoutes)

app.listen(5000, () => {
    console.log('Server berjalan pada port 3000')
})