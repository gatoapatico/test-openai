import OpenAI from "openai";
import { OPENAI_API_KEY } from "./env";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

const messages = [
    {
        role: 'system',
        content: 'You are a helpful general knowledge expert.'
    },
    {
        role: 'user',
        content: 'Who invented the playstation?'
    }
];

const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages
});

console.log(response.choices[0].message.content);