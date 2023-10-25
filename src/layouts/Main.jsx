
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default Main;
