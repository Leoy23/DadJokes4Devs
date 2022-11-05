import React from 'react';
import './Favorites.css';
import {Favorite} from '../Favorite/Favorite';
import { NoFavorites } from '../NoFavorites/NoFavorites';
import {Joke} from '../../model';

interface FavoritesProps {
  favs: Joke[];
  deleteFav: (id: string) => void;
}

export const Favorites = ({favs, deleteFav}: FavoritesProps) => {
  const favsList = favs.map(fav => {
    return (
      <Favorite
        key={fav.id}
        id={fav.id}
        joke={fav.joke}
        deleteFav={deleteFav}
      />
    )
  })
  return (
    <section className={favsList.length === 0 ? 'no-favs' : 'fav-box'}>
      {favsList.length === 0 && <NoFavorites />}
      {favsList}
    </section>
  )
}