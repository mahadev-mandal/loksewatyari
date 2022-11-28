import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import CountCard from "../../components/Cards/CountCard";
import { LabeledPieChart } from "../../components/Charts/LableledPieChart";
import { SimpleBarChart } from "../../components/Charts/SimpleBarChart";
import { SimpleLineChart } from "../../components/Charts/SimpleLineChart";
import MiniDrawer from "../../components/Drawer/MiniDrawer";
import DrawerHeader from "../../components/DrawerHeader";
import SimpleList from "../../components/Lists";

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex', background: 'rgb(250,250,250)' }}>
      <MiniDrawer />
      <Box component="main"
        sx={{
          flexGrow: 1,
          px: { xs: 1, sm: 2, lg: 3 },
          py: 1
        }}
      >
        <DrawerHeader />
        <Grid container sx={{}}>
          <Grid item xs={12} md={9} sx={{ px: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                  sx={{ overflowX: 'auto', width: '100%', py: 1 }}
                >
                  <CountCard />
                  <CountCard />
                  <CountCard />
                  <CountCard />
                  <CountCard />
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <SimpleLineChart />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SimpleBarChart />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LabeledPieChart />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} component={Paper} sx={{ px: 2 }}>
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5">Popular Questions</Typography>
                <Divider />
                <SimpleList />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">Last 10 comments</Typography>
                <Divider />
                <SimpleList />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>

  );
}

// total questions till yearly,monthly,weekly,daily
// total users till yearly, monthly, weekly, daily, las 90days, las30days
// Active users now
// likes
// disliked
// comments || suggestions
// popular questions
// total views
