import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,  ResponsiveContainer } from 'recharts';
import { Box, Paper } from '@mui/material';

const data = [
  { date: '21 Jan', valueA: 30, valueB: 40 },
  { date: '22 Jan', valueA: 50, valueB: 60 },
  { date: '23 Jan', valueA: 70, valueB: 80 },
  { date: '24 Jan', valueA: 90, valueB: 100 },
  { date: '25 Jan', valueA: 110, valueB: 120 },
  { date: '26 Jan', valueA: 70, valueB: 80 },
  { date: '27 Jan', valueA: 50, valueB: 60 }
];

const BarGraph = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Paper sx={{  backgroundColor: 'transparent' }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokearray="3 3" vertical={false}/>
            <XAxis dataKey="date" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            {/* <Tooltip /> */}
            {/* <Legend /> */} 
            <Bar dataKey="valueA" fill="rgba(79, 70, 229, 1)" barSize={20} radius={[5, 5, 0, 0]}/>
            <Bar dataKey="valueB" fill="rgba(16, 185, 129, 1)" barSize={20} radius={[5, 5, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default BarGraph;
