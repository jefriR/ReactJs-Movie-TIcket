import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Seat from './Seat';


export default function Transaction() {
    let { imdbID } = useParams();
    let [movie, setMovie] = useState([{title: "movie1"}]);
    let maxSeat = 50;

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=e63791d0`)
        .then(res => {
            movie = res.data;
            setMovie(movie)
            console.log(res.data)
        })
    },[])


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-8">
                    <div className="row">
                        {Array.from({ length: 60 }, (_, index) => 
                            <div className="col-sm-2">
                                <Seat key={(index + 1)} value={index + 1}/>
                            </div>
                        )}
                    </div>
                    <div className="row mt-5 justify-content-center">
                        <div className="col-sm-4">
                            <button className="btn btn-primary btn-block">Buy</button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card shadow-lg">
                        <div className="card-header">
                            <h4><strong>Detail Movie</strong></h4>
                        </div>
                        <div className="card-body ">
                            <div className="row">
                                <div className="col-sm-12">
                                    <img src={movie.Poster} alt="poster Movie" height="300px"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table table-sm">
                                        <tbody className="text-left">
                                            <tr>
                                                <td>Title</td>
                                                <td>: {movie.Title}</td>
                                            </tr>
                                            <tr>
                                                <td>Genre</td>
                                                <td>: {movie.Genre}</td>
                                            </tr>
                                            <tr>
                                                <td>Actors</td>
                                                <td>: {movie.Actors}</td>
                                            </tr>
                                            <tr>
                                                <td>language</td>
                                                <td>: {movie.Language}</td>
                                            </tr>
                                            <tr>
                                                <td>Desc</td>
                                                <td>: {movie.Plot}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-3 shadow-lg">
                        <div className="card-header">
                            <h4><strong>Seat</strong></h4>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
