import React, {useState, useEffect} from "react";
import {Jokes} from '../Jokes/Jokes'
import './App.css';
import {Joke} from '../../model';
import {getJokes} from '../../apiCalls'

export default function App() {

  const [joke, setJoke] = useState<Joke>({ id: '', joke: '', status: 0 })
  const [error, setError] = useState<string>('')

  useEffect(() => {
      getJokes()
      .then(randomJoke => setJoke(randomJoke))
      .catch(error => setError(`Uh oh, that's a ${error.message}! Try again later.`))
  }, [])

  return (
    <>
      <h1>I am DadJokes4Devs</h1>
      { error && <h2>{error}</h2> }
      <Jokes 
        id={joke.id}
        joke={joke.joke}
      />
    </>
  )
}
