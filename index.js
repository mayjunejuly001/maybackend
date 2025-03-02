require('dotenv').config()
const { configDotenv } = require('dotenv')
const express = require('express')

const app = express()


app.get('/' , (req,res) => {
 res.send('Hello World')
})

app.get('/mayank', (req, res) => {
  res.send('<h1>mayank here for backend</h1>')
})

app.listen(process.env.PORT , () => {
 console.log(`App listening on port ${process.env.PORT}`)
 
})