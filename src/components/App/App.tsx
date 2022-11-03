import React, {useState, useEffect} from "react";
import './App.css';
import {Nav} from '../Nav/Nav';
import {Jokes} from '../Jokes/Jokes';
import {Joke} from '../../model';
import {getJokes} from '../../apiCalls';

export default function App() {

  const [joke, setJoke] = useState<Joke>({ id: '', joke: '', status: 0 })
  const [error, setError] = useState<string>('')
  const [favs, setFavs] = useState<Joke[]>([])

  const addFav = ( id: string, joke: string ) => {
    
    const favJoke = {
      id: id,
      joke: joke
    }
    
    if (!favs.some(fav => fav.id === id)) {
      setFavs([...favs, favJoke])
    }
  }
  
  const newJoke = () => {
    getJokes()
      .then(randomJoke => setJoke(randomJoke))
      .catch(error => setError(`Uh oh, that's a ${error.message}! Try again later.`))
  }

  useEffect(() => {
      getJokes()
      .then(randomJoke => setJoke(randomJoke))
      .catch(error => setError(`Uh oh, that's a ${error.message}! Try again later.`))
  }, [])

  return (
    <>
      <h1>I am DadJokes4Devs</h1>
      { error && <h2>{error}</h2> }
      <Nav />
      <Jokes 
        id={joke.id}
        joke={joke.joke}
        addFav={addFav}
        newJoke={newJoke}
      />
    </>
  )
}
