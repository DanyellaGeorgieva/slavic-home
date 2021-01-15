import React from 'react';
import classes from './BlockFloor.module.css';
import FloorUnit from './FloorUnit/FloorUnit';

const blockFloor = (props) => {
	let floor = null;

	switch (props.type) {
		case 'ground-floor':
			floor = <div className={classes.LastFloor}></div>;
			break;
		case 'sub-floor':
			floor = (
				<div className={classes.SubFloor}>
					<FloorUnit type="normal" />
					<FloorUnit type="painted" />
					<FloorUnit type="staircase" />
					<FloorUnit type="balcony" />
					<FloorUnit type="walled-up" />
				</div>
			);
			break;
		case 'last-floor':
			floor = <div className={classes.GroundFloor}></div>;
			break;
		default:
			floor = null;
	}

	return floor;
};

export default blockFloor;
