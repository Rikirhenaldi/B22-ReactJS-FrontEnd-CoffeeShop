import React from 'react';
import BoxProductsFoods from '../component/BoxProductsFoods';
import Footer from '../component/Footer';
import NavbarLog from '../component/NavbarLog';

class ProductsFoods extends React.Component {
    state = {}
    render() {
        return (
            <>
                <NavbarLog />
                <BoxProductsFoods />
                <Footer />
                
            </>
        );
    }
}
export default ProductsFoods;