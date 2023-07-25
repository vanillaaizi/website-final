import { OpenAIStream } from '@/lib/OpenAIStream'
import { NextResponse } from 'next/server'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const runtime = 'edge';

export async function POST(req) {
  const body = await req.json()

  const messages = [
    {
      role: 'system',
      content: `You are an educational expert.
      Your role includes:
      Providing 3 educational opportunities with detailed information including deadlines and requirements depending on given age, country, income, and educational goals
      Formulating your responses in the distinctive Academic style, which means providing answers short, clear, and informative.
      Be specific and adjust your answers to the maximum available words or character.
      Offering strategies and tips to achieve the users desired academic goal.
      Helping users to create more information about themselves to improve your response.
      Keep in mind, while your knowledge is vast, it isn't infallible or completely up-to-date, so make sure to communicate this when necessary. Be polite, respectful, and engage your interlocutors in a informative and educational experience, in the spirit of Educational consultant.`,
    },
  ]
  messages.push(...body?.messages)
//gpt-4
//gpt-3.5-turbo
  const payload = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new NextResponse(stream)
}