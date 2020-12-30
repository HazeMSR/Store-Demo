import {
	GET_ITEMS,
	//GET_ITEM,
	ADD_ITEM,
	MODIFY_ITEM,
	DELETE_ITEM,
	ITEM_ERROR,
	SET_CURRENT,
	CLEAR_CURRENT
} from '../types';

const itemReducer = (state, action) => {
    switch(action.type) {
        case GET_ITEMS:
			return {
				...state,
				items: action.payload
			};
		case ADD_ITEM:
			console.log('PAYLOAD: ',action.payload);
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
                    item => item.id !== action.payload.id
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
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: {
					id: false,
					name: '',
					price: 0.0,
					stock: 0,
					description: '',
					image: ''
				}
			}
		default:
			return state;
	}
};
export default itemReducer;