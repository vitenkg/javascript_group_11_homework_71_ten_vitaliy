import React from 'react';
import './Home.css';
import ShowMenu from "../ShowMenu/ShowMenu";
import ShowCart from "../ShowCart/ShowCart";

const Home = () => {
    return (
        <div className="Home">
            <ShowMenu/>
            <ShowCart/>
        </div>
    );
};

export default Home;