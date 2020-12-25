import React, { useEffect, useState, useContext } from 'react';
import ModalContext from '../../context/modal/modalContext';
import ModifyItem from '../items/ModifyItem';
import DeleteItem from '../items/DeleteItem';
import ItemContext from '../../context/item/itemContext';

const Modal = () => {
	const modalContext = useContext(ModalContext);
	const itemContext = useContext(ItemContext);
	const { clearCurrent, current, deleteItem, modifyItem, addItem, getItems } = itemContext;
	const { isActive, closeModal, type } = modalContext;
	
	const [ activeState, setActive ] = useState('modal');

	useEffect(() => {
		if(!isActive) setActive('modal');
		else setActive('modal is-active');
		console.log('Entro useEffect modal ', isActive);
	}, [isActive]);
	
	const onSubmit = () => {
		switch (type) {
			case 0:
				addItem(current);
				break;
			case 1:
				modifyItem(current);
				break;
			case 2:
				deleteItem(current.id);
				clearCurrent();
				break;
			default:
				console.log('DEFAULT');
				break;
		}
		getItems();
		closeModal();
	};

	const onCancel = () => {
		closeModal();
		clearCurrent();
	};
	console.log('type: '+ type +' Entro modal: ' + isActive + ', active state: '+ activeState);

	return (
		<div id="modal" className={activeState}>
			<div className="modal-background"></div>
			<div className="modal-card">
			<header className="modal-card-head">
      			<p className="modal-card-title">Item</p>
      			<button className="delete" aria-label="close" onClick={onCancel}></button>
    		</header>
    		<section className="modal-card-body">
				<div className="content is-active">
					{isActive && (type > 1 ? (<DeleteItem />) : (<ModifyItem />)) } 
    			</div>  
    		</section>
    		<footer className="modal-card-foot">
				<button className="button" onClick={onSubmit}>{
					type < 2 ? (type < 1 ? 'Add Item' : 'Modify Item') : 'Delete Item'
				}</button>
      			<button className="button is-danger" onClick={onCancel}>Cancel</button>
    		</footer>
			</div>
  		</div>
	);
};
export default Modal;
