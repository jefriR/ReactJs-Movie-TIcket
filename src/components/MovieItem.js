import React from 'react'
import { Link } from "react-router-dom";

export default function MovieItem({data}) {
    return (
        <div>
            <div className="card movie-list-card">
                <img src={data.Poster} className="card-img-top" alt="Movie Image"/>
                <div className="card-body">
                    <h5 className="card-title"><strong>{data.Title}</strong></h5>
                    <p className="card-text">Year : {data.Year}</p>
                    <p className="card-text">Type : {data.Type}</p>
                    <p>{data.imdbID}</p>
                    <Link to={`/transaction/${data.imdbID}`}>
                     <button type="button" className="btn btn-primary text-white">Buy Ticket</button>
                    </Link>
                    
                </div>
            </div>
        </div>
        
    )
}
