import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

const data1 = [
    { label: 'A1', value: 10, color: 'rgba(75, 85, 99, 1)' },
    { label: 'A2', value: 100, color: 'rgba(67, 56, 202, 1)' },

];
const series = [

    {
        innerRadius: 100,
        outerRadius: 120,
        id: 'series-2',
        data: data1,
        // cornerRadius: 10,
    },
];

export default function PieClickNoSnap() {

    return (
        <>
            <Box display={'flex'} alignItems="center" justifyContent={'center'} ml={5}>
                <PieChart
                    series={series}
                    width={400}
                    height={300}
                    slotProps={{
                        legend: { hidden: true },
                    }}
                    // onItemClick={(event, d) => setItemData(d)}
                    sx={{
                        '& .recharts-pie-sector': {
                            stroke: 'none', // Remove outlines
                        },
                    }}
                />
            </Box>
            <Box>
                <Typography color={'grey'} fontSize={14}>Performance</Typography>
                <Typography fontFamily={"inter"} fontSize={18} fontWeight={600} color="white">Avergare</Typography>
            </Box>
        </>
    );
}
