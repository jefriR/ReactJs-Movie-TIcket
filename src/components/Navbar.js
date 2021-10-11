import React from 'react';
import { Link } from "react-router-dom";

export default function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <a className="navbar-brand" href="#">Movie Ticket</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link to="/">
                        <a className="nav-item nav-link active" href="#">Movie <span className="sr-only">(current)</span></a>
                    </Link>
                    </div>
                </div>
                <div className="my-2 my-lg-0">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Logout</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

{/* <Link to="/transaction">
<button type="button" className="btn btn-primary text-white">Buy Ticket</button>
</Link> */}