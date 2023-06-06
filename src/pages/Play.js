import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Grid, Button, Container, Stack, Typography, Box } from '@mui/material';
import VideoPlayer from '../components/videoplayer/videoPlayer';
import { RemainingVideoCard } from '../sections/@dashboard/video';
import VIDEOS from '../_mock/videos';

const Play = () => {
  const { videoId } = useParams();
  const currVideo = VIDEOS[parseInt(videoId, 10)];

  const remainingVideos = VIDEOS.filter((video, index) => index !== parseInt(videoId, 10));

  return (
    <>
      <Helmet>
        <title> Play | Zenity </title>
      </Helmet>
      <Container maxWidth="xl" disableGutters>
        <VideoPlayer url={currVideo.url}/>
      </Container>
    </>
  );
};

export default Play;
