import React from 'react';
import NavbarLog from '../component/NavbarLog';
import Footer from '../component/Footer';
import BoxPayment from '../component/BoxPayment';
class YourChart extends React.Component {
    state = {}
    render() {
        return (
            <>
                <NavbarLog />
                <BoxPayment />
                <Footer />
                
            </>
        );
    }
}
export default YourChart;