import React, { useEffect, useState, useContext } from 'react';
import ItemContext from '../../context/item/itemContext';

const AddItemModal = props => {
	const itemContext = useContext(ItemContext);
	
	const { current, addItem, modifyItem } = itemContext;

	useEffect( () => {
			
		console.log('CURRENT', current);
    }, [current]);

	const [active, setActive] = useState(props.isActive)	;
	
	console.log('ITEMmmmm');
    const [item, setItem] = useState({
		id: false,
		name: '',
		price: 0.0,
		stock: 0,
		description: '',
		image: ''
	});
	console.log('ITEMmmmm2',item);

    const { name, price, stock, description, image } = item;


	const onSubmit = e => {
		let newItem = {
			id: item.id.current,
			name: item.name.current,
			price: item.price.current,
			stock: item.stock.current,
			description: item.description.current,
			image: item.image.current
		};
		if ( current !== null ) modifyItem(newItem);
		else {
			delete newItem.id;
			addItem(newItem);
		}
	};
	
	const onChange = e => {
		console.log("onChange");
		setItem({ ...item, [e.target.name]: e.target.value });
	};
		

	const close = e => {
		itemContext.setCurrent(null);
		setActive('modal');
	};

	return (
		<div id="modal" className={active}>
			<div className="modal-background"></div>
				<div className="modal-content">

				<div className="form"> 
			<div className="field is-horizontal">
				<div className="field-label is-large">
			   		<label className="label">Product</label>
			 	</div>
			 	<div className="field-body">
			   		<div className="field">
			     		<p className="control has-icons-left">
							<input 
								className="input is-large"
								type="text"
								placeholder="Name"
								value={name}
								onChange={onChange}
								required 
							/>
			       			<span className="icon is-small is-left">
			         			<i className="fas fa-paint-roller" />
			       			</span>
			     		</p>
			   		</div>
				</div>
			</div>
			<div className="field is-horizontal is-large">
				<div className="field-label is-large"><label className="label">Price</label></div>
				<div className="field-body">
				  <div className="field is-expanded">
					<div className="field has-addons">
					  <p className="control">
						<a className="button is-large is-static">
							<i className="fas fa-dollar-sign" />
						</a>
					  </p>
					  <p className="control is-expanded">
							<input
								className="input is-large"
								type="number"
								placeholder="Price"
								value={price}
								onChange={onChange}
								required
							/>
					  </p>
					</div>
					<p className="help">Only numbers</p>
				  </div>
				</div>
		  	</div>
			<div className="field is-horizontal">
				<div className="field-label is-large">
			   		<label className="label">Stock</label>
			 	</div>
			 	<div className="field-body">
			   		<div className="field">
			     		<p className="control has-icons-left">
			       			<input
								className="input is-large"
								type="number"
								placeholder="Stock"
								value={stock}
								onChange={onChange}
								required
							/>
			       			<span className="icon is-small is-left">
			         			<i className="fas fa-cart-arrow-down" />
			       			</span>
			     		</p>
							<p className="help">Only integer numbers</p>
			   		</div>
				</div>
			</div>
			<div className="field is-horizontal">
				<div className="field-label is-large">
			   		<label className="label">Description</label>
			 	</div>
			 	<div className="field-body">
			   		<div className="field">
			     		<p className="control has-icons-left">
			       			<input
								className="input is-large"
								type="text"
								placeholder="Description"
								value={description}
								onChange={onChange}
							/>
			       			<span className="icon is-small is-left">
			         			<i className="fas fa-align-left" />
			       			</span>
			     		</p>
			   		</div>
				</div>
			</div>
			<div className="field is-horizontal">
				<div className="field-label is-large">
			   		<label className="label">Image</label>
			 	</div>
			 	<div className="field-body">
			   		<div className="field">
			     		<p className="control has-icons-left">
			       			<input
								className="input is-large"
								type="text"
								placeholder="URL"
								value={image}
								onChange={onChange}
							/>
			       			<span className="icon is-small is-left">
			         			<i className="fas fa-image" />
			       			</span>
			     		</p>
						 <p className="help">Paste the URL of your image</p>
			   		</div>
				</div>
			</div>
			<div className="field is-grouped is-grouped-centered">
				<div className="control">
    				<button className="button is-warning" onClick={onSubmit}>Submit</button>
  				</div>
			</div>
		</div>

				</div>
			<button className="modal-close is-large" aria-label="close"></button>
	  		<footer class="modal-card-foot">
				<button class="button is-danger" onClick={close}>Close</button>
	  		</footer>
  		</div>
	);
};
export default AddItemModal;
