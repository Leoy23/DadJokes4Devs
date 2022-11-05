import { Favorite } from '../Favorite/Favorite';
import { NoFavorites } from '../NoFavorites/NoFavorites';
import { FavoritesProps } from '../../model';
import './Favorites.css';

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
    <section className={favsList.length ? 'fav-box' : 'no-favs'}>
      {favsList.length ? favsList : <NoFavorites/>}
    </section>
  )
}