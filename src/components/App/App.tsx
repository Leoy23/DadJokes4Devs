import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Nav } from '../Nav/Nav';
import { Jokes } from '../Jokes/Jokes';
import { Favorites } from '../Favorites/Favorites'
import { BadUrl } from '../BadUrl/BadUrl';
import { Joke } from '../../model';
import { getJokes } from '../../apiCalls';

export default function App() {

  const [joke, setJoke] = useState<Joke>({ id: '', joke: '' })
  const [error, setError] = useState<string>('')
  const [favs, setFavs] = useState<Joke[]>([])
  const [favStatus, setfavStatus] = useState<boolean>(false)

  useEffect(() => {
    newJoke();
}, [])

  const newJoke = () => {
    getJokes()
      .then(randomJoke => {
        setJoke({id: randomJoke.id, joke: randomJoke.joke})
        setfavStatus(false)
      })
      .catch(error => setError(`Uh oh, that's a ${error.message}! Try again later.`))
  }

  const addFav = ( id: string, joke: string ) => {
    const favJoke = {
      id,
      joke
    }
    
    if (!favs.some(fav => fav.id === id)) {
      setFavs([...favs, favJoke])
      setfavStatus(true)
    } 
  }

  const deleteFav = (id: string) => {
    const filteredFavs = favs.filter(fav => fav.id !== id)
    setFavs(filteredFavs)
    setfavStatus(false)
  }

  return (
    <main className='home-page'>
      <Nav />
      {error ?  <h2 className='error-msg'>{error}</h2> : 
      <Switch>
        <Route exact path='/'>
          <Jokes 
            id={joke.id}
            joke={joke.joke}
            favStatus={favStatus}
            addFav={addFav}
            newJoke={newJoke}
            deleteFav={deleteFav}
          />
        </Route>
        <Route exact path='/favorites'>
          <Favorites
            favs={favs}
            deleteFav={deleteFav}
          />
        </Route>
        <Route component={BadUrl} />
      </Switch> }
    </main>
  )
}
