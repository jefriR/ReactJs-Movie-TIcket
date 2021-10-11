import React, {useEffect, useState} from 'react'
import MovieItem from './MovieItem'
import axios from 'axios'

export default function Home() {
    let [movies, setMovies] = useState([{title: "movie1"}]);

    useEffect(() => {
        axios.get("http://www.omdbapi.com/?s=avengers&apikey=e63791d0")
        .then(res => {
            setMovies(res.data.Search);
        })
    },[])

    return (
        <div className="container">            
            <div className="row">
                {movies.map((movie, index) => (
                    <div className="col-sm-4 mt-3">
                        <MovieItem key={movie.imdbID} data={movie}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
