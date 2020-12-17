const { static } = require('express')
const express = require('express')
const cors = require('cors')

const PORT = 3000

const app = express()
app.use(cors())

app.post('/book', express.urlencoded({ extended: true }), (req, res) => {

    console.log('payload: ', req.body)
    res.status(200)
    res.json({message: 'accepted'})
})

// app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`port started on port 3000`)
})