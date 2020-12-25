import {
	OPEN_MODAL,
	CLOSE_MODAL,
	SET_TYPE,
} from '../types';

const modalReducer = (state, action) => {
    switch(action.type) {
        case OPEN_MODAL:
			return {
				...state,
				isActive: true
			};
		case CLOSE_MODAL:
			return {
				...state,
				isActive: false
			};
		case SET_TYPE:
			return {
				...state,
				type: action.payload
			};
		default:
			return state;
	}
};
export default modalReducer;
