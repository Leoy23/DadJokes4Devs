import React from 'react';
import './Favorite.css';

interface FavoriteProps {
  id: string;
  joke: string;
  deleteFav: (id: string) => void;
}

export const Favorite = ({id, joke, deleteFav}: FavoriteProps) => {
  return (
    <>
      <p>{id}: {joke}</p>
      <button onClick={() => deleteFav(id)}>No moar favorite</button>
    </>
  )
}