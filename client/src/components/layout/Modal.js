import React, { useEffect, useState, useContext } from 'react';
import ModalContext from '../../context/modal/modalContext';
import ModifyItem from '../items/ModifyItem';
import ItemContext from '../../context/item/itemContext';

const Modal = () => {
	const modalContext = useContext(ModalContext);
	const itemContext = useContext(ItemContext);
	const { isActive, closeModal } = modalContext;
	
	const [ activeState, setActive ] = useState('modal');

	useEffect(() => {
		if(!isActive) setActive('modal');
		else setActive('modal is-active');
		console.log('Entro useEffect modal ', isActive);
	}, [isActive]);
	
	const close = e => {
		itemContext.setCurrent(null);
		closeModal();
	};
	console.log('Entro modal: ' + isActive + ', active statea: '+ activeState);

	return (
		<div id="modal" className={activeState}>
			<div className="modal-background"></div>
			<div className="modal-card">
			<header className="modal-card-head">
      			<p className="modal-card-title">New Item</p>
      			<button className="delete" aria-label="close" onClick={close}></button>
    		</header>
    		<section className="modal-card-body">
				<div className="content is-active">
					{isActive && (<ModifyItem />)}
    			</div>  
    		</section>
    		<footer className="modal-card-foot">
      			<button className="button is-danger" onClick={close}>Close</button>
    		</footer>
			</div>
  		</div>
	);
};
export default Modal;
