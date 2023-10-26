import { useEffect } from "react";
import styles from './Movie.module.css'

export default function Movie ({ 
    id,
    title,
     year,
      plot,
       posterUrl,
        director,
        onMovieDelete,
        onMovieSelect,
        selected
 }) {

    //if we depend on something outside like title bellow we should add it

    useEffect(() => {
        console.log(`Movie ${title} - mounted!`)
    }, [title]); //if TITLE is changed this will
    // reload this is MOUNT when component is mounted
    //if everything with useEffect work correctly it wont be a problem
    //to add title bellow the array


    useEffect(() => {
        console.log(`Movie ${title} - updated!`)
    }, [selected, title]) //if TITLE is changed this will reload every time when selected is changed i want you to
     //show me this message ! - THIS IS UPDATE comp , when i have selected
     //because when selected is changed it means its updated

     useEffect(() => {
        return () => {
            console.log(`Movie ${title} - unmounted!`)
        }
     }, [title]);//if TITLE is changed this will reload //and UNMOUNT because returns function
     // when component is deleted it will display the message for unmount

    return (
        <article className={styles['movie-article']}>
            <h3>{title}, {year}</h3>
            {selected && <h4>Selected</h4>}
            <main>
                <img src={posterUrl} alt={title}/>
                <p>{plot}</p>
            </main>
            <footer>
                <p>director: {director}</p>
                <button onClick={() => onMovieDelete(id)}>Delete</button>
                <button onClick={() => onMovieSelect(id)}>Select</button>
            </footer>
            
        </article>
    );

}