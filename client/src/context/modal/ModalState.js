import React, { useReducer} from 'react';
import ModalContext from './modalContext';
import ModalReducer from './modalReducer';

import {
	OPEN_MODAL,
	CLOSE_MODAL
} from '../types';

const ModalState = props => {
    const initialState = {
		isActive: false
	};
	const [state, dispatch] = useReducer(ModalReducer, initialState);
	
	const openModal = async () => {
		dispatch({ type: OPEN_MODAL });
	};
	
	const closeModal = async () => {
		dispatch({ type: CLOSE_MODAL });
	};
		
	return (
        <ModalContext.Provider
        value={{
			isActive: state.isActive,
			openModal,
			closeModal
        }}
        >
            { props.children }
        </ModalContext.Provider>
    );
};
export default ModalState;
