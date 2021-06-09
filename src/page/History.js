import React from 'react';
import NavbarLog from '../component/NavbarLog';
import Footer from '../component/Footer';
import HistoryCust from '../component/HistoryCust';


class History extends React.Component {
    state = {}
    render() {
        return (
            <>
                <NavbarLog />
                <HistoryCust />
                <Footer />
                
            </>
        );
    }
}
export default History;