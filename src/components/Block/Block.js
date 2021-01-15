import React from 'react';

import classes from './Block.module.css';
import BlockFloor from './BlockFloor/BlockFloor';

const block = (props) => {
  return(
    <div className={classes.Block}>
      <BlockFloor type='ground-floor'/>
      <BlockFloor type='sub-floor'/>
      <BlockFloor type='sub-floor'/>
      <BlockFloor type='sub-floor'/>
      <BlockFloor type='sub-floor'/>
      <BlockFloor type='sub-floor'/>
      <BlockFloor type='sub-floor'/>
      <BlockFloor type='sub-floor'/>
      <BlockFloor type='sub-floor'/>
      <BlockFloor type='last-floor'/>
    </div>
  );
}

export default block;