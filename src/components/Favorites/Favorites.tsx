import React from 'react';
import './Favorites.css';
import {Favorite} from '../Favorite/Favorite';
import {Joke} from '../../model';

interface FavoritesProps {
  favs: Joke[];
}

export const Favorites = ({favs}: FavoritesProps) => {
  const favsList = favs.map(fav => {
    return (
      <Favorite
        key={fav.id}
        id={fav.id}
        joke={fav.joke}
      />
    )
  })
  return (
    <>
      <p>I am Favorites</p>
      {favsList}
    </>
  )
}