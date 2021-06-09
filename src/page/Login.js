import React from 'react';
import BoxLogin from '../component/BoxLogin'
import BoxMemberCard from '../component/BoxMemberCard'
import Footer from '../component/Footer'
class Login extends React.Component {
    state = {}
    render() {
        return (
            <header>
                <BoxLogin />
                <BoxMemberCard />
                <Footer />
            </header>
        );
    }
}
export default Login