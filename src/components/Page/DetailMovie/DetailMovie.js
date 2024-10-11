import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailMovie.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MovieDetail = () => {
    const { id } = useParams();
    const [detailMovie, setDetailMovie] = useState({});
    const [trailerUrl, setTrailerUrl] = useState(''); 
    const API_KEY = 'e9e9d8da18ae29fc430845952232787c';

    //Fetch API của detail
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setDetailMovie(data);
            });
    }, [id]);

    //Fetch API của trailer "type === trailer"
    const fetchTrailer = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                const trailer = data.results.find(video => video.type === 'Trailer');
                if (trailer) {
                    setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
                } else {
                    alert('Not Found');
                }
            });
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        fetchTrailer();
    };

    return (
        <div className="movie-detail">
            <div className="thumb">
                <img src={`https://image.tmdb.org/t/p/w300${detailMovie.poster_path}`} alt={detailMovie.title} />
            </div>

            <div className="content">
                <h2 className='title'>{detailMovie.title}</h2>

                <div className="content-top">
                    <p className='release'>{detailMovie.release_date}</p>
                    <p className="genres">
                        {detailMovie.genres && detailMovie.genres.map((genre) => genre.name).join(', ')}
                    </p>

                    <div className="runtime">
                        <i className="fa-regular fa-clock"></i>
                        <p className="time">{detailMovie.runtime}</p>
                    </div>
                </div>

                <div className="content-mid">
                <p className='vote'>{detailMovie.vote_average} %</p>
                <p>User Score</p>
                <Button variant="primary" onClick={handleShow}>
                    Play Trailer
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Trailer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {trailerUrl && (
                            <iframe
                                width="100%"
                                height="315"
                                src={trailerUrl}
                                title="Movie Trailer"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </Modal.Body>
                </Modal>
                </div>
               
                <div className="content-bot">
                    <p className='title'>Can You Bury Your Past?</p>
                    <h5>Overview</h5>
                    <p className='overview'>{detailMovie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
