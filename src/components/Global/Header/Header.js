import React from 'react';
import './Header.css';
import { Container } from 'react-bootstrap';
import Logo from '../../../assets/img/logo.svg';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    // Hàm xử lý khi form tìm kiếm được submit
    const handleSearch = (e) => {
        e.preventDefault();
        //Lấy giá trị từ input
        const query = e.target.elements.searchInput.value;
        //Check input có value ko
        if (query.trim()) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className='header'>
            <Container>
                <div className="header-main">
                    <div className="header-logo">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <ul className="header-menu">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/movie'>MOVIE</Link></li>
                    </ul>

                    <div className="header-search">
                        <form onSubmit={handleSearch}>
                            <input type="text" placeholder='Search for a movie' name="searchInput" />
                            <button type="submit">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;
