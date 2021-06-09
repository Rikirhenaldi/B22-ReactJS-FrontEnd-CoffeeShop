import React from 'react';
import BoxProductsCoffee from '../component/BoxProductsCoffee';
import Footer from '../component/Footer';
import NavbarLog from '../component/NavbarLog';

class ProductsCoffee extends React.Component {
    state = {}
    render() {
        return (
            <>
                <NavbarLog />
                <BoxProductsCoffee />
                <Footer />
                
            </>
        );
    }
}
export default ProductsCoffee;