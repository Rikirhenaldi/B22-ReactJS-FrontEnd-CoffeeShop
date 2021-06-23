import React from 'react';
import HistoryCust from '../component/HistoryCust';
import Modals from '../component/Modals';


class HistoryModal extends React.Component {
    // state = {}
    render() {
        return (
          <div>
            <HistoryCust />
            <Modals />
                
          </div>
        );
    }
}
export default HistoryModal;