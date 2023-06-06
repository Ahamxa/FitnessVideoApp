import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Grid, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import ViewsIcon from '@mui/icons-material/Visibility';
import CommentsIcon from '@mui/icons-material/Comment';

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
  index: PropTypes.number,
};


export default function VideoCard({ video, index }) {
 
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Card sx={{ maxWidth: isMobile ? 250 : 300 }}>
      <Link to={`/dashboard/play/${index}`} key={index}>
        <img src={video.thumbnail} width="100%" alt="thumbnail" />
      </Link>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {video.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap={!isMobile}>
          {video.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {video.category}
        </Typography>
        <Grid container alignItems="center" spacing={1} sx={{ marginTop: 'auto', marginBottom: 'auto' }}>
          <Grid item>
            <ViewsIcon color="action" fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              {video.view}
            </Typography>
          </Grid>
          <Grid item>
            <CommentsIcon color="action" fontSize="small" />
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              {video.comment}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
