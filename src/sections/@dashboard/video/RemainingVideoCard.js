import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Grid, useMediaQuery, Box } from '@mui/material';
import { Link } from 'react-router-dom';

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function VideoCard({ video, index }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Card>
        <Grid container spacing={1}>
          <Grid item xs={5} md={5}>
            <Link to={`/dashboard/play/${index}`} key={index}>
              <img src={video.thumbnail} width="100%" alt="thumbnail" />
            </Link>
          </Grid>
          <Grid item xs={7} md={7}>
            <Typography variant="subtitle1" component="div" marginTop={1} gutterBottom>
              {video.title}
            </Typography>
          </Grid>
        </Grid>
    </Card>
  );
}
