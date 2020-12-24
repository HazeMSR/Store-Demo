import React, { useReducer } from 'react';
import axios from 'axios';
import ItemContext from './itemContext';
import ItemReducer from './itemReducer';
import {
	GET_ITEMS,
	//GET_ITEM,
	ADD_ITEM,
	MODIFY_ITEM,
	DELETE_ITEM,
    ITEM_ERROR,
    SET_CURRENT
} from '../types';

const ItemState = props => {
    //const host = 'localhost:5000';
    const initialState = {
        items : null,
        current: null,
        filtered: null,
        error: null
    };
    
    const [state, dispatch] = useReducer(ItemReducer, initialState);

    // Set current item
    const setCurrent = async item => {
        dispatch({ type: SET_CURRENT, payload: item });
    };

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
    
    // Add Item
    const addItem = async item => {
        const config = { headers: {'Content-Type': 'application/json'}};
        try {
            console.log('ADD ITEM: ',item);
            const res = await axios.post(`/items`, item, config);
            console.log('RES: ',res);
            dispatch({ 
                type: ADD_ITEM, 
                payload: res.data 
            });
        } catch (err) { 
            dispatch({ 
                type: ITEM_ERROR,
                payload: err.response.msg
            });
        }
    };

    // Modify Item
    const modifyItem = async item => {
        const config = { headers: {'Content-Type': 'application/json'}};
        try {
            const link = `/items/${item.id}`;
            const i = JSON.stringify(item);
            console.log('LINK: '+ link +', ITEM: '+ i +', CONFIG: '+config);
            
            const res = await axios.put(link, i, config);
            console.log('RES: ',res);
            dispatch({ 
                type: MODIFY_ITEM, 
                payload: res.data 
            });
        } catch (err) { 
            dispatch({ 
                type: ITEM_ERROR,
                payload: err.response.msg
            });
        }
    };

    // Delete Item
    const deleteItem = async id => {
        try {
            console.log('id: ',id);
			const res = await axios.delete(`/items/${id}`);
            dispatch({ 
                type: DELETE_ITEM, 
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
            current: state.current,
            filtered: state.filtered,
            error: state.error,
            getItems,
            addItem,
            modifyItem,
            deleteItem,
            setCurrent
        }}
        >
            { props.children }
        </ItemContext.Provider>
    );
};
export default ItemState;