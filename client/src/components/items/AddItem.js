import React from 'react';

const AddItem = () => {
	return (
		<div className="form">
			<div className="field is-horizontal">
				<div className="field-label is-large">
			   		<label className="label">Product</label>
			 	</div>
			 	<div className="field-body">
			   		<div className="field">
			     		<p className="control has-icons-left">
			       			<input className="input is-large" type="text" placeholder="Name" required/>
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
						<a className="button  is-large is-static">
							<i className="fas fa-dollar-sign" />
						</a>
					  </p>
					  <p className="control is-expanded">
						<input className="input is-large" type="number" placeholder="Price" required/>
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
			       			<input className="input is-large" type="number" placeholder="Stock" required/>
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
			       			<input className="input is-large" type="text" placeholder="Description" />
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
			       			<input className="input is-large" type="text" placeholder="URL" />
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
    				<button className="button is-warning">Submit</button>
  				</div>
			</div>
		</div>
	);
};
export default AddItem;