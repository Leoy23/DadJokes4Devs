import React from 'react'
import {Joke} from '../Joke/Joke'
// import {JokesProps} from '../../model'
import './Jokes.css'

interface JokesProps {
    id: string;
    joke: string;
    favStatus: boolean;
    addFav: (id: string, joke: string) => void;
    newJoke: () => void;
    deleteFav: (id: string) => void;
}

export const Jokes = ({ id, joke, favStatus, addFav, newJoke, deleteFav }: JokesProps) => {
    return (
        <section className='jokes-box'>
            <Joke 
                id={id}
                joke={joke}
                favStatus={favStatus}
                addFav={addFav}
                deleteFav={deleteFav}
            />
            <button 
                className='new-joke-btn'
                onClick={newJoke}
            >New Joke Pls
            </button>
        </section>
    )
}

