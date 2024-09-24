const openai = require('../config/openaiConfig')


const generateText = async (req, res) => {
    const { title } = req.body

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: "How many colours in a rainbow",
            },
        ],
        max_tokens: 100,
    });

    
    res.status(200).json({
        response: response.choices[0].message.content
    })
}

const generateImage = async (req, res) => {
    
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: req.body.prompt,
        n: 1,
        size: "1024x1024",
    });

    res.json({
        url: response.data[0].url
    })
}



module.exports = { generateText, generateImage }