const express = require('express')
const cors = require('cors')
const database = require('./config/database')
const router = require('./routes/route')

const app = express()
const port = 9000

app.use(cors())
app.use(express.json())
// app.use('/foodmate', router)

database.authenticate()
    .then(() => {
        console.log('Database connected')
    })
    .catch((error) => {
        console.error('Error connecting to the database')
    })

app.listen(port, () => {
    console.log(`Hosting at port ${port}`)
})

