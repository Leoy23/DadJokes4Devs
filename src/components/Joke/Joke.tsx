import React from 'react'
import './Joke.css'

interface JokeProps {
    id: string;
    joke: string;
    addFav: Function;
}

export const Joke = ({ id, joke, addFav }: JokeProps) => {
    return (
        <div>
            <p>{joke}</p>
            <button onClick={() => addFav(id, joke)}>+</button>
        </div>
    )
}