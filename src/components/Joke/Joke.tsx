import React from 'react'
import './Joke.css'

interface JokeProps {
    id: string;
    joke: string;
    addFav: (id: string, joke: string) => void;
    favStatus: boolean;
    deleteFav: (id: string) => void;
}

export const Joke = ({ id, joke, addFav, favStatus, deleteFav }: JokeProps) => {
    const text = favStatus ? 'No Moar Favorite' : 'Moar Favorite'

    return (
            <article className='display-joke'>
                <p>{joke}</p>
                {favStatus && <span className="update-favs">Added to your favorites!</span>}
                <button 
                    className='fav-btn'
                    onClick={favStatus ? () => deleteFav(id) : () => addFav(id, joke)}>
                    {text}
                </button>
            </article>
    )
}