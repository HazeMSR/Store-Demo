import {
	GET_ITEMS,
	//GET_ITEM,
	ADD_ITEM,
	MODIFY_ITEM,
	DELETE_ITEM,
	ITEM_ERROR,
	SET_CURRENT
} from '../types';

const itemReducer = (state, action) => {
    switch(action.type) {
        case GET_ITEMS:
			return {
				...state,
				items: action.payload
			};
		case ADD_ITEM:
			return {
				...state,
				items: [ action.payload,
					...state.items ]
				};
		case MODIFY_ITEM:
			return {
				...state,
				items: state.items.map(  
					item => 
						item.id === action.payload.id
							? action.payload
							: item
                )
			};
		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter( 
                    item => item.id !== action.payload
                )
			};
		case ITEM_ERROR:
			return {
				...state,
				error: action.payload
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			}
		default:
			return state;
	}
};
export default itemReducer;