import React, { useReducer} from 'react';
import ModalContext from './modalContext';
import ModalReducer from './modalReducer';

import {
	OPEN_MODAL,
	CLOSE_MODAL,
	SET_TYPE
} from '../types';

const ModalState = props => {
    const initialState = {
		isActive: false,
		type: 0
	};
	const [state, dispatch] = useReducer(ModalReducer, initialState);
	
	const openModal = async () => {
		dispatch({ type: OPEN_MODAL });
	};
	
	const closeModal = async () => {
		dispatch({ type: CLOSE_MODAL });
	};
	
	const setType = async type => {
		dispatch({ 
			type: SET_TYPE,
			payload: type
		});
	};

	return (
        <ModalContext.Provider
        value={{
			isActive: state.isActive,
			type: state.type,
			openModal,
			closeModal,
			setType
        }}
        >
            { props.children }
        </ModalContext.Provider>
    );
};
export default ModalState;
