import React, {useState, useEffect} from "react";
import './App.css';
import {Joke} from '../../model';
import {getJokes} from '../../apiCalls'

export default function App() {

  const [joke, setJoke] = useState<Joke | {}>({})
  const [error, setError] = useState<string>('')

  useEffect(() => {
      getJokes()
      .then(randomJoke => setJoke(randomJoke))
      .catch(error => setError(`Uh oh, that's a ${error.message}! Try again later.`))
  }, [])

  return (
    <>
      <h1>I am App3</h1>
    </>
  )
}
