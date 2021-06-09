import React from 'react';
import BoxProductsNonCoffee from '../component/BoxProductsNonCoffee';
import Footer from '../component/Footer';
import NavbarLog from '../component/NavbarLog';

class ProductsCoffee extends React.Component {
    state = {}
    render() {
        return (
            <>
                <NavbarLog />
                <BoxProductsNonCoffee />
                <Footer />
                
            </>
        );
    }
}
export default ProductsCoffee;