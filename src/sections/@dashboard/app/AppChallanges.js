import PropTypes from 'prop-types';
import { Card, CardContent, Typography, LinearProgress, Box, CardHeader } from '@mui/material';


AppChallanges.propTypes = {
  data: PropTypes.array,
};

export default function AppChallanges({ data, ...other }) {
 

  return (
    <Card {...other}>
    <CardHeader title="Challanges" />
    <Box p={4}  bgcolor="white">
       {data.map((challange, index) => (
        <Box margin={2}  bgcolor="white" key={index}>
        <Card>
        <CardHeader title={challange.title} />
        <CardContent>
        <LinearProgress key={index} variant="determinate" value={challange.progress} />
        </CardContent>
        </Card>
        </Box>
     ))}
    </Box>
    </Card>
  );
}


