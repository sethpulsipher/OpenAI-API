const express = require('express')
const { generateText, generateImage } = require('./controllers/openaiController')

// app setup
const app = express()
app.listen(4000, () => console.log('listening on port 4000'))

// middleware
app.use(express.json())

// routes
app.post('/openai/chat', generateText)
app.post('/openai/image', generateImage)