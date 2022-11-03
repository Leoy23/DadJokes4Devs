import React from 'react';
import './Favorite.css';

interface FavoriteProps {
  id: string;
  joke: string;
}

export const Favorite = ({id, joke}: FavoriteProps) => {
  return (
    <>
      <p>I am Favorite</p>
      <p>{id}: {joke}</p>
    </>
  )
}