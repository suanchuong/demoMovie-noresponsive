import React from 'react';
import { Link } from 'react-router-dom';
import './CardMovie.css';

const CardMovie = (props) => {
    return (
        <Link to={`/movie/${props.id}`} className='card-movie'>
            <div className="thumb">
                <img src={`https://image.tmdb.org/t/p/w300${props.img}`} alt={props.title} />
            </div>

            <div className="content">
                <h3>{props.title}</h3>
                <div className="release">
                    <p>Release Date: {props.date}</p>
                    <div className="rate">
                        <i className="fa-solid fa-star"></i>
                        {props.vote}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardMovie;
