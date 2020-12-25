import {
	OPEN_MODAL,
	CLOSE_MODAL
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
		default:
			return state;
	}
};
export default modalReducer;
