
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Counter from '../scorewidget/counter';
import Stopwatch from '../stopwatch/Stopwatch';
import './index.css'

const VideoPlayer = (props) => {
  const [score, setScore] = useState(0);
  const handel=()=>{
    setScore(score+20);
  }
  const handleProgress = (e) => {
    // Calculate the score based on the video progress
    const watchedPercentage = Math.floor(e.played * 1000);
    const calculatedScore = Math.floor(watchedPercentage / 10);

    // Update the score
    setScore(calculatedScore);
  };
  


  return (
    <div className='video-player'>
    <Counter score={score}/>
    <Stopwatch/>
      <ReactPlayer  url={props.url} onProgress={handleProgress}controls width="100%" height="100%" /> 
      <button onClick={handel}>asda</button>
    </div>
  );
};

export default VideoPlayer;