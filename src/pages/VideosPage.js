import React from 'react'
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography,Box } from '@mui/material';
// components
import Iconify from '../components/iconify';

import { VideoCard } from '../sections/@dashboard/video';

import VIDEOS from '../_mock/videos';

export default function VideosPage() {
  return (
    <>
    <Helmet>
      <title> Videos: Zenity </title>
    </Helmet>

    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          Recomended
        </Typography>
      </Stack>

      <Grid container spacing={3}>
      {VIDEOS.map((video, index) => (
        <Box margin={3} key={index}>
            <VideoCard key={video.id} video={video} index={index} />
            </Box>
          ))}
      </Grid>
      
    </Container>
  </>
  )
}
