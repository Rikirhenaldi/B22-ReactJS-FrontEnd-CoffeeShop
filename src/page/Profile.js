import React from 'react';
import NavbarLog from '../component/NavbarLog';
import Footer from '../component/Footer';
import BoxProfile from '../component/BoxProfile'

class Profile extends React.Component {
    state = {}
    render() {
        return (
            <>
                <NavbarLog />
                <BoxProfile />
                <Footer />
                
            </>
        );
    }
}
export default Profile;