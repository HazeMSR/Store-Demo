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
		console.log('Entro useEffect modal');
	}, [isActive]);
	
	const close = e => {
		itemContext.setCurrent(null);
		closeModal();
	};
	console.log('Entro modal');

	return (
		<div id="modal" className={activeState}>
			<div className="modal-background"></div>
				<div className="modal-content">
			  		Hello
					<ModifyItem />
				</div>
			<button className="modal-close is-large" aria-label="close"></button>
	  		<footer class="modal-card-foot">
				<button class="button is-danger" onClick={close}>Close</button>
	  		</footer>
  		</div>
	);
};
export default Modal;
