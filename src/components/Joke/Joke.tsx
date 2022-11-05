import { JokeProps } from '../../model'
import './Joke.css'

export const Joke = ({ id, joke, favStatus, addFav, deleteFav }: JokeProps) => {
    const text = favStatus ? 'No Moar Favorite' : 'Moar Favorite'

    return (
            <article className='display-joke'>
                <p>{joke}</p>
                {favStatus && <span className='update-favs'>Added to your favorites!</span>}
                <button 
                    className='fav-btn'
                    onClick={favStatus ? () => deleteFav(id) : () => addFav(id, joke)}>
                    {text}
                </button>
            </article>
    )
}