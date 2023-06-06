import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import './index.css'

function Counter(props) {

  return (
    <div className='score-widget'>
      <h3>Score: {props.score}</h3>
      <CircularProgress size={100} color="inherit" variant="determinate" value={props.score} />
    </div>
  );
}

export default Counter;
