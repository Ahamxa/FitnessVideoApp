import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppChallanges,
  AppSpentTime,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Zenity </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total points" total={400} icon={'icon-park-solid:scoreboard'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="total Time spent" total={200} color="info" icon={'ion:time-sharp'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total workouts" total={12} color="warning" icon={'material-symbols:exercise'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Active Days" total={10} color="error" icon={'heroicons:calendar-days-solid'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppSpentTime
              title="Time spent"
              data={[
                { day: 'Day 1', time: 60 },
               { day: 'Day 2', time: 90 },
               { day: 'Day 3', time: 120 },
               { day: 'Day 4', time: 75 },
               { day: 'Day 5', time: 105 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
           <AppChallanges
            data={[
              { title: 'Challenge 1', progress: 50 },
              { title: 'Challenge 2', progress: 80 },
              { title: 'Challenge 2', progress: 80 },
            ]}
           />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
