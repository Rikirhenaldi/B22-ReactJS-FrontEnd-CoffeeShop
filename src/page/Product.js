import React from 'react';
import BoxProducts from '../component/BoxProducts';
import Footer from '../component/Footer';
import NavbarLog from '../component/NavbarLog';

class Product extends React.Component {
    state = {}
    render() {
        return (
            <>
                <NavbarLog />
                <BoxProducts />
                <Footer />
                
            </>
        );
    }
}
export default Product;