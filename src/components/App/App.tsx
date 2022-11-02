import React, {useState, useEffect} from "react";
import './App.css';
import {Joke} from '../../model';

export default function App() {

  const [joke, setJoke] = useState<Joke | {}>({})
  const [error, setError] = useState<string>('')

  const fetchData = () => {
    return fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        "Accept" : "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}`)
        }
        return response.json()
      })
  }

  useEffect(() => {
      fetchData()
      .then(randomJoke => setJoke(randomJoke))
      .catch(error => setError(`Uh oh, that's a ${error.message}! Try again later.`))
  }, [])

  return (
    <>
      <h1>I am App3</h1>
    </>
  )
}
