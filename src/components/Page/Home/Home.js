import React from 'react';
import Banner from './Banner/Banner';
import ListMovie from './ListMovie/ListMovie';

const Home = () => {

    const movieData = [
        {
            id: 1,
            title: 'Now Playing Movie',
            data: 'now_playing',
        },
        {
            id: 2,
            title: 'Upcoming Movie',
            data: 'upcoming',
        },
        {
            id: 3,
            title: 'Top Rated Movie',
            data: 'top_rated',
        }
    ]

    return (
        <div>
            <Banner></Banner>
            
            {movieData.map((item) => (
                <ListMovie key={item.id} title={item.title} data={item.data}></ListMovie>
            ))}
        </div>
    );
};

export default Home;