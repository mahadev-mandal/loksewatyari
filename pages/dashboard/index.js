import { Box } from "@mui/material";
import React from "react";
import { LabeledPieChart } from "../../components/Charts/LableledPieChart";
import { SimpleBarChart } from "../../components/Charts/SimpleBarChart";
import { SimpleLineChart } from "../../components/Charts/SimpleLineChart";
import MiniDrawer from "../../components/Drawer/MiniDrawer";
import DrawerHeader from "../../components/DrawerHeader";

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <MiniDrawer />
      <Box component="main"
        sx={{
          flexGrow: 1,
          px: { xs: 1, sm: 2, lg: 3 },
          py: 1
        }}
      >
        <DrawerHeader />
        <SimpleLineChart />
        <Box sx={{ width: 500 }}>
          <SimpleBarChart />
        </Box>
        <Box sx={{ width: 300 }}>
          <LabeledPieChart />
        </Box>
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
