import React from "react";
import { Joke } from "../Joke/Joke";
// import {JokesProps} from '../../model'
import "./Jokes.css";

/* 
could move the JokeProps interface into your model file 
and import here and in Joke

since this one has the newJoke and Joke.tsx doesn't,
you can update this interface to be 

interface JokesProps extends JokeProps {
    newJoke: () => void;
}
looks like you considered doing this but maybe didn't know exactly how

i would also consider renaming this to be more indicative of what it is, 
this component isn't holding multiple jokes, but you could name it like
JokeContainer or JokeBox or something similar

another option is inside src you could add a pages folder that would have 
your JokesPage and FavoritesPage or something similar 
*/
interface JokesProps {
  id: string;
  joke: string;
  favStatus: boolean;
  addFav: (id: string, joke: string) => void;
  newJoke: () => void;
  deleteFav: (id: string) => void;
}

export const Jokes = ({
  id,
  joke,
  favStatus,
  addFav,
  newJoke,
  deleteFav,
}: JokesProps) => {
  return (
    <section className="jokes-box">
      <Joke
        id={id}
        joke={joke}
        favStatus={favStatus}
        addFav={addFav}
        deleteFav={deleteFav}
      />
      <button className="new-joke-btn" onClick={newJoke}>
        New Joke Pls
      </button>
    </section>
  );
};
