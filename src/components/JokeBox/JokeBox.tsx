import { Joke } from '../Joke/Joke';
import { JokeBoxProps } from '../../model';
import './JokeBox.css';

export const JokeBox = ({id, joke, favStatus, addFav, newJoke, deleteFav}: JokeBoxProps) => {
    return (
        <section className='joke-box'>
            <Joke 
                id={id}
                joke={joke}
                favStatus={favStatus}
                addFav={addFav}
                deleteFav={deleteFav}
            />
            <button 
                className='new-joke-btn'
                onClick={newJoke}
            >New Joke Pls
            </button>
        </section>
    );
};