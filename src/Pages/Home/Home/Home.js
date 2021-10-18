import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import GeneralContent from '../GeneralContent/GeneralContent';
import Overview from '../Overview/Overview';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <GeneralContent></GeneralContent>
            <Services></Services>
            <Overview></Overview>
            <Footer></Footer>

        </div>
    );
};

export default Home;