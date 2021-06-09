import React from 'react';
import NavbarLog from '../component/NavbarLog';
import Footer from '../component/Footer';
import HistoryCust from '../component/HistoryCust';
import Modals from '../component/Modals';


class HistoryModal extends React.Component {
    state = {}
    render() {
        return (
            <>
                <NavbarLog />
                <HistoryCust />
                <Modals />
                <Footer />
                
            </>
        );
    }
}
export default HistoryModal;