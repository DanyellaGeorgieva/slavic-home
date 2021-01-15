import React from 'react';
import classes from './FloorUnit.module.css';

const floorUnit = (props) => {
	let floorUnit = null;

	switch (props.type) {
		case 'normal':
			floorUnit = <div className={classes.Normal}></div>;
			break;
		case 'painted':
			floorUnit = <div className={classes.Painted}></div>;
			break;
		case 'staircase':
			floorUnit = <div className={classes.Staircase}></div>;
			break;
		case 'balcony':
			floorUnit = <div className={classes.Balcony}></div>;
			break;
		case 'walled-up':
			floorUnit = <div className={classes.WalledUp}></div>;
			break;
		default:
			floorUnit = null;
	}

	return floorUnit;
};

export default floorUnit;
