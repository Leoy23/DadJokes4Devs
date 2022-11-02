import React from 'react'
import {Joke} from '../Joke/Joke'
// import {JokesProps} from '../../model'
import './Jokes.css'

interface JokesProps {
    id: string;
    joke: string;
    addFav: Function;
}

export const Jokes = ({ id, joke, addFav }: JokesProps) => {
    return (
        <>
            <Joke 
                id={id}
                joke={joke}
                addFav={addFav}
            />
        </>
    )
}

