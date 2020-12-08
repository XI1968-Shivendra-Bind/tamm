import React from 'react';

import withHover from '../hoc/MouseTracker'
import './style.css'

const ChangeColor = ({ mouseOver }) => {
  console.log(mouseOver);
  return (
    <div className="box">
      <div className={`inner-box ${mouseOver ? 'red' : 'green'}`}>
        
      </div>
    </div>
  )
}

export default withHover(ChangeColor);
