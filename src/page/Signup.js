import React from 'react';
import BoxMemberCard from '../component/BoxMemberCard'
import BoxRegister from '../component/BoxRegister';
import Footer from '../component/Footer'
class Signup extends React.Component {
    state = {}
    render() {
        return (
            <header>
                <BoxRegister />
                <BoxMemberCard />
                <Footer />
            </header>
        );
    }
}
export default Signup;