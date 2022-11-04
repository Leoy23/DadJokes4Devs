import React from 'react'
import './Joke.css'

interface JokeProps {
    id: string;
    joke: string;
    addFav: (id: string, joke: string) => void;
    btnText: boolean;
    deleteFav: (id: string) => void;
}

export const Joke = ({ id, joke, addFav, btnText, deleteFav }: JokeProps) => {
    const text = btnText ? 'No Moar Favorite' : 'Moar Favorite'

    return (
        <div>
            <p>{joke}</p>
            <button 
            onClick={btnText ? () => deleteFav(id) : () => addFav(id, joke)}>{text}</button>
        </div>
    )
}