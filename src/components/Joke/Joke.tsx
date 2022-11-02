import React from 'react'
import './Joke.css'

interface JokeProps {
    id: string;
    joke: string;
}

export const Joke = ({ id, joke }: JokeProps) => {
    return (
        <div>
            <p>{joke}</p>
        </div>
    )
}