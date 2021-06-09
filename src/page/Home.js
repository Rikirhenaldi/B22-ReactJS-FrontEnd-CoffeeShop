import React from 'react';
import Navbar from "../component/Navbar"
import Banner from "../component/Banner"
import BoxInfo from '../component/BoxInfo';
import BoxProvide from '../component/BoxProvide';
import BoxFavorite from '../component/BoxFavorite';
import BoxMap from '../component/BoxMap';
import BoxPartner from '../component/BoxPartner';
import BoxComment from '../component/BoxComment';
import BoxPromo from '../component/BoxPromo';
import Footer from '../component/Footer';

class Home extends React.Component {
    state = {}
    render() {
        return (
            <>
                <Navbar />
                <Banner />
                <BoxInfo />
                <BoxProvide />
                <BoxFavorite />
                <BoxMap />
                <BoxPartner />
                <BoxComment />
                <BoxPromo />
                <Footer />
            </>
        )
    }
}
export default Home