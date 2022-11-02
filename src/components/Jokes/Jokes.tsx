import React from 'react'
import {Joke} from '../Joke/Joke'
// import {JokesProps} from '../../model'
import './Jokes.css'

interface JokesProps {
    id: string;
    joke: string;
}

export const Jokes = ({ id, joke }: JokesProps) => {
    return (
        <>
            <Joke 
                id={id}
                joke={joke}
            />
        </>
    )
}

