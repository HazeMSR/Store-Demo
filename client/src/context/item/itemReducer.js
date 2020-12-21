import {
	GET_ITEMS,
	GET_ITEM,
	ADD_ITEM,
	MODIFY_ITEM,
	DELETE_ITEM,
	ITEM_ERROR
} from '../types';

const itemReducer = (state, action) => {
    switch(action.type) {
        case GET_ITEMS:
			return {
				...state,
				items: action.payload
			};
		case ITEM_ERROR:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};
export default itemReducer;