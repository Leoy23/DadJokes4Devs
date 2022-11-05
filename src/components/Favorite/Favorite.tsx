import { FavoriteProps } from '../../model';
import './Favorite.css';

export const Favorite = ({id, joke, deleteFav}: FavoriteProps) => {
  return (
    <article className={`fav-card ${id}`}>
      <p>{joke}</p>
      <button 
        className='delete-fav-btn'
        onClick={() => deleteFav(id)}>No moar favorite</button>
    </article>
  );
};