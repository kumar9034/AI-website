import { generateContent } from "../services/Ai.services.js";

const getresponse = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("prompt is required ");
    }

    try {
        const response = await generateContent(code);
        res.send(response);
    } catch (error) {
        console.error("Error generating content:", error.message);
        res.status(500).send("Internal Server Error: Unable to generate content.");
    }
};

export { getresponse };