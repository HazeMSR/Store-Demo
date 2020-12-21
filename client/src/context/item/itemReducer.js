import {
	GET_ITEMS,
	GET_ITEM,
	ADD_ITEM,
	MODIFY_ITEM,
	DELETE_ITEM
} from '../types';

const itemReducer = (state, action) => {
    switch(action.type) {
        case GET_ITEMS:
			return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
};
export default itemReducer;