import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Notification = props => {
	return (
		<div className={'notification ' + props.type}>
			{props.content}
		</div>
	);
};
/*
Notification.propTypes = {
	type: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
};
*/
export default Notification;
