import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';

// ----------------------------------------------------------------------

AppSpentTime.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default function AppSpentTime({title,data, ...other }) {
  const chartOptions = {
    chart: {
      id: 'video-time-chart',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: data.map((entry) => entry.day),
    },
    yaxis: {
      title: {
        text: 'Time (minutes)',
      },
    },
    colors: ['#8884d8'],
    stroke: {
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
  };

  const chartSeries = [
    {
      name: 'Time',
      data: data.map((entry) => entry.time),
    },
  ];

  return (
    <Card {...other}>
      <CardHeader title={title}  />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
      <Chart options={chartOptions} series={chartSeries} type="line" height={360} />
      </Box>
    </Card>
  );
}
