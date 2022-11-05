import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import {Nav} from '../Nav/Nav';
import {Jokes} from '../Jokes/Jokes';
import {Favorites} from '../Favorites/Favorites'
import {Joke} from '../../model';
import {getJokes} from '../../apiCalls';

export default function App() {

  const [joke, setJoke] = useState<Joke>({ id: '', joke: '' })
  const [error, setError] = useState<string>('')
  const [favs, setFavs] = useState<Joke[]>([])
  const [btnText, setBtnText] = useState<boolean>(false)

  useEffect(() => {
    getJokes()
    .then(randomJoke => setJoke({id: randomJoke.id, joke: randomJoke.joke}))
    .catch(error => setError(`Uh oh, that's a ${error.message}! Try again later.`))
}, [])

  const addFav = ( id: string, joke: string ) => {
    
    const favJoke = {
      id,
      joke
    }
    
    if (!favs.some(fav => fav.id === id)) {
      setFavs([...favs, favJoke])
      setBtnText(true)
    } 
  }

  const newJoke = () => {
    getJokes()
      .then(randomJoke => {
        setJoke(randomJoke)
        setBtnText(false)
      })
      .catch(error => setError(`Uh oh, that's a ${error.message}! Try again later.`))
  }

  const deleteFav = (id: string) => {
    const filteredFavs = favs.filter(fav => fav.id !== id)
    setFavs(filteredFavs)
    setBtnText(false)
  }

  return (
    <main className="home-page">
      <Nav />
      { error && <h2>{error}</h2> }
      <Route exact path="/">
        <Jokes 
          id={joke.id}
          joke={joke.joke}
          addFav={addFav}
          newJoke={newJoke}
          btnText={btnText}
          deleteFav={deleteFav}
        />
      </Route>
      <Route exact path="/favorites">
        <Favorites
          favs={favs}
          deleteFav={deleteFav}
        />
      </Route>
    </main>
  )
}
