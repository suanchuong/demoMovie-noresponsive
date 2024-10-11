import React, { useEffect, useState } from 'react';
import './Movie.css';
import { Col, Container, Row } from "react-bootstrap";
import useFetch from '../../../Hook/useFetch';
import CardMovie from '../../Global/CardMovie/CardMovie';
import { useParams } from "react-router-dom";

const Movie = () => {
    const { slug: keySearch } = useParams();
    console.log(keySearch);

    const [page, setPage] = useState(1);
    const [allMovie, setAllMovie] = useState([]);
    const API_KEY = 'e9e9d8da18ae29fc430845952232787c';
    const movie = useFetch(keySearch ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keySearch}&page=${page}` : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`);

    useEffect(() => {
        setAllMovie([...allMovie, ...movie]);
    }, [movie]);

    return (
        <div className='list-movie-show'>
            <Container>
                <div className="headline">
                    <h3>ONLINE STREAMING</h3>
                    <h2>List Movie</h2>
                </div>

                <Row>
                    {allMovie.map((item) => (
                        <Col lg={3} key={item.id}>
                            <CardMovie
                                title={item.original_title}
                                img={item.poster_path}
                                date={item.release_date}
                                vote={item.vote_average}
                                id={item.id}
                            />
                        </Col>
                    ))}
                </Row>

                <button onClick={() => setPage(page + 1)}>Show More</button>
            </Container>
        </div>
    );
};

export default Movie;