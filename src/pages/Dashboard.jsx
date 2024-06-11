import React from 'react'
import DashboardNav from '../components/DashboardNav'
import Sidebar from '../components/Sidebar'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Insights from '../components/Insights'

const Dashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box bgcolor="#1f2937" display="flex" overflow={'scroll'} className="hide_scrollbar">
      {!isSmallScreen && <Sidebar />}
      <Box width={isSmallScreen ? '100%' : "85%"} marginLeft={isSmallScreen ? '0%' : '15%'}>
        <DashboardNav />
        <Insights />
      </Box>
    </Box>
  )
}

export default Dashboard