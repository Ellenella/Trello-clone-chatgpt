
import openai from '@/openai'
import { NextResponse } from 'next/server';
import React from 'react'

export async function POST(request: Request) {
    const { todos } = await request.json()

    //connect openai
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: "system",
                content: `when responding welcome the user always as Hello and say Welcome to the Ellen's Trello Project! limit the responses to 200 characters. then tell the user to have productive days! Here's the data: ${JSON.stringify(todos)} `
                
            }]
    })

    const  {data} = response;

    console.log("data is ", data)
    console.log(data.choices[0].message)
    return NextResponse.json(data.choices[0].message)
}