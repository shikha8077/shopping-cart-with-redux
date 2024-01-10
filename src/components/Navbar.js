import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);

    const totalCount = items.reduce((acc, item) => acc + item.count, 0);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart 
                    <b> {totalCount >0 && totalCount} </b>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;