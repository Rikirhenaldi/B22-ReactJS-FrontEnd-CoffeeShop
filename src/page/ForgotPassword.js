import React from 'react';
import Footer from '../component/Footer';
import BannerForgotPass from '../component/BannerForgotPass';


class ForgotPassword extends React.Component {
    state = {}
    render() {
        return (
            <>
                <BannerForgotPass />
                <Footer />
                
            </>
        );
    }
}
export default ForgotPassword;