import React from 'react';

const Modal = props => {
	return (
		<div id="modal" className="modal is-active">
			<div className="modal-background"></div>
				<div className="modal-content">
			  		Hello
				</div>
			<button className="modal-close is-large" aria-label="close"></button>
	  		<footer class="modal-card-foot">
				<button class="button is-success">Save changes</button>
				<button class="button">Close</button>
	  		</footer>
  		</div>
	);
};
export default Modal;
