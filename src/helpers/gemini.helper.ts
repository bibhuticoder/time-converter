import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBlCdVdqcHIi1cqqGC_v_ek-lmL8EWCmLo");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export const getAnswer = async (question: string) => {
    const chat = model.startChat();
    const result = await chat.sendMessage(`
        In the subsequent convresations, I will give you some text. You need to provide me a video script for that text.
        The video script is one-person script i.e. only one person is speaking. 
        Provide me output in JSON array format. each array is an object. The object has type, content, keywords properties.
        type:  any of "text", "image"
        content: Not required for image. For each content highlight at least 2 important words using <s>WORD</s> tag.
        keyword: required only for images. keywords is an array of string that describe the next block of content. The keywords is used to search for images on unsplash API

        Note: The 1st element should always be image. Image keywords should be very related to the text after that.

        Here's the text: "${question}"

        Be as extensive as you can. I need more text. Aim for minimum 10 items on the JSON array.
    `);
    const response = await result.response;
    const text = JSON.parse(response.text().replaceAll("```", "").replace("json", "").replace("JSON", ""));

    return text;

    [
        {
            mediaType: "image|video",
            mediaKeywords: "list, of, words, separated, by, comma, that, describe, the, text",
            text: ["", ""],
        }
    ]

    const data = [
        {
            "type": "image",
            "keywords": [
                "fertilizers",
                "soil"
            ],
            "content": "https://images.unsplash.com/photo-1492496913980-501348b61469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTgyODl8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVycyUyQ3NvaWx8ZW58MHwxfHx8MTcxNTAwNjY0OHww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "type": "text",
            "content": "The excessive use of fertilizers has led to a decline in the <s>quality</s> of our <s>soil</s>."
        },

        {
            "type": "text",
            "content": "This trend, if left unchecked, poses a grave danger to the <s>health</s> of our <s>planet</s>."
        },
        {
            "type": "image",
            "keywords": [
                "fertilizers",
                "pollution"
            ],
            "content": "https://images.unsplash.com/photo-1531326537431-6197cac3795b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTgyODl8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVycyUyQ3BvbGx1dGlvbnxlbnwwfDF8fHwxNzE1MDA2NjQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "type": "text",
            "content": "Fertilizers, while essential for crop growth, can have detrimental effects on the <s>environment</s> when used in <s>excess</s>."
        },
        {
            "type": "image",
            "keywords": [
                "fertilizers",
                "water pollution"
            ],
            "content": "https://images.unsplash.com/photo-1680458841870-ed068330db33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTgyODl8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVycyUyQ3dhdGVyJTIwcG9sbHV0aW9ufGVufDB8MXx8fDE3MTUwMDY2NDl8MA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "type": "text",
            "content": "Excess fertilizer can leach into <s>waterways</s>, causing eutrophication and harming <s>aquatic</s> life."
        },
        {
            "type": "image",
            "keywords": [
                "fertilizers",
                "air pollution"
            ],
            "content": "https://images.unsplash.com/photo-1547963802-25f153e14080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTgyODl8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVycyUyQ2FpciUyMHBvbGx1dGlvbnxlbnwwfDF8fHwxNzE1MDA2NjUwfDA&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "type": "text",
            "content": "Additionally, fertilizer production and application can contribute to <s>air</s> <s>pollution</s>."
        },
        {
            "type": "image",
            "keywords": [
                "organic farming",
                "sustainable agriculture"
            ],
            "content": "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTgyODl8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyQ3N1c3RhaW5hYmxlJTIwYWdyaWN1bHR1cmV8ZW58MHwxfHx8MTcxNTAwNjY1MHww&ixlib=rb-4.0.3&q=80&w=1080"
        },
        {
            "type": "text",
            "content": "To mitigate the negative impacts of fertilizers, we must transition to more <s>sustainable</s> agricultural <s>practices</s>, such as organic farming and precision agriculture."
        }
    ]

    return data

}
