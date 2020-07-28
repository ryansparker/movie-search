import React from 'react';
import './style.css';

function SearchMovies() {

        const searchMovies = async (event) => {
            event.preventDefault();
            console.log('submitting');

            const query = "Tootsie";
        
            const url = `https://api.themoviedb.org/3/movie/550?api_key=d62ca852d4c2f262b2aaf6266483cf35ab
            &language=en-US&query=${query}&page=1&include_adult=false`;

            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        }
    return(
    <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">Search:</label>
        <input className="input" type="text" name="query" placeholder="Enter Movie"/>
        <button className="button" type="submit">search</button>
    </form>
    )

}

export default SearchMovies
