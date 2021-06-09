import React from 'react';
import Footer from '../component/Footer';
import NavbarLog from '../component/NavbarLog';
import BoxProductDetails from '../component/BoxProductDetails';
import BoxQuantity from '../component/BoxQuantity';


class ProductDetails extends React.Component {
    state = {}
    render() {
        return (
            <>
                <NavbarLog />
                <BoxProductDetails />
                <BoxQuantity/>
                <Footer />
                
            </>
        );
    }
}
export default ProductDetails;