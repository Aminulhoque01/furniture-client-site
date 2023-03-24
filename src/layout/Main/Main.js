import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../sheard/Footer/Footer';
import Header from '../../sheard/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;