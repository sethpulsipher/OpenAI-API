// Import the OpenAI class from the 'openai' package
const { OpenAI } = require('openai')

// Load environment variables from a .env file into process.env
require('dotenv').config()

// Create a new instance of the OpenAI class
// The API key is read from the OPEN_AI_KEY environment variable
const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
});

// Export the openai instance so it can be used in other parts of the application
module.exports = openai