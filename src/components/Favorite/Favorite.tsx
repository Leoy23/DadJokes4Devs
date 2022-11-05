import React from "react";
import "./Favorite.css";

interface FavoriteProps {
  id: string;
  joke: string;
  deleteFav: (id: string) => void;
}

export const Favorite = ({ id, joke, deleteFav }: FavoriteProps) => {
  return (
    <article className="fav-card">
      <p>{joke}</p>
      <button className="delete-fav-btn" onClick={() => deleteFav(id)}>
        No moar favorite
      </button>
    </article>
  );
};
