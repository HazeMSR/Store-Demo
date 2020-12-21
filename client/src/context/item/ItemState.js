import React, { useReducer } from 'react';
import axios from 'axios';
import ItemContext from './itemContext';
import ItemReducer from './itemReducer';
import {
	GET_ITEMS,
	GET_ITEM,
	ADD_ITEM,
	MODIFY_ITEM,
	DELETE_ITEM,
	ITEM_ERROR
} from '../types';

const ItemState = props => {
    const initialState = {
        items : null,
        filtered: null,
        error: null
    };
    
    const [state, dispatch] = useReducer(ItemReducer, initialState);

    // Get Items
    const getItems = async () => {
        try {
			const res = await axios.get('/items');
            dispatch({ 
                type: GET_ITEMS, 
                payload: res.data 
            });
        } catch (err) { 
            dispatch({ 
                type: ITEM_ERROR,
                payload: err.response.msg
            });
        }
	};

    return (
        <ItemContext.Provider
        value={{
            items: state.items,
            filtered: state.filtered,
            error: state.error,
            getItems
        }}
        >
            { props.children }
        </ItemContext.Provider>
    );
};
export default ItemState;