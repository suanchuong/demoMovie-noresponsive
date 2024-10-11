import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Global/Header/Header';
import Home from './components/Page/Home/Home';
import Movie from './components/Page/Movie/Movie';
import DetailMovie from './components/Page/DetailMovie/DetailMovie';
import Footer from './components/Global/Footer/Footer';


const App = () => {

  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie' element={<Movie/>}></Route>
        <Route path='/search/:slug' element={<Movie/>}></Route>
        <Route path='/movie/:id' element={<DetailMovie/>}></Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
};

export default App;
