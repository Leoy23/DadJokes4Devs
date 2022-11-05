export interface Joke {
  id: string;
  joke: string;
}

export interface JokeProps extends Joke {
  favStatus: boolean;
  addFav: (id: string, joke: string) => void;
  deleteFav: (id: string) => void;
}

export interface JokesProps extends JokeProps {
  newJoke: () => void;
}

export interface FavoriteProps extends Joke {
  deleteFav: (id: string) => void;
}

export interface FavoritesProps {
  favs: Joke[];
  deleteFav: (id: string) => void;
}
