import React from 'react'
import {Joke} from '../Joke/Joke'
// import {JokesProps} from '../../model'
import './Jokes.css'

interface JokesProps {
    id: string;
    joke: string;
    addFav: (id: string, joke: string) => void;
    newJoke: () => void;
    btnText: boolean;
    deleteFav: (id: string) => void;
}

export const Jokes = ({ id, joke, addFav, newJoke, btnText, deleteFav }: JokesProps) => {
    return (
        <>
            <Joke 
                id={id}
                joke={joke}
                addFav={addFav}
                btnText={btnText}
                deleteFav={deleteFav}
            />
            <button onClick={newJoke}>New Joke Pls</button>
        </>
    )
}

