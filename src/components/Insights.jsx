import React from 'react'
import Card from '../atoms/Card'
import { Box, Button, Grid, Typography } from '@mui/material'
import leadsImage from '../assets/leads.svg'
import mailsImage from '../assets/mails.svg'
import proposalImage from '../assets/files.svg'
import appointementImage from '../assets/calendar.svg'
import BarGraph from './BarGraph'
import ProgressBar from './PieGraph'
import CustomTable from './CustomTable'
const Insights = () => {
    const insightsData = [{
        image: leadsImage,
        count: 64,
        title: 'New Leads',
        incOrDec: 2.6,
        isInc: true
    }, {
        image: mailsImage,
        count: 25,
        title: 'Email',
        incOrDec: 5.5,
        isInc: true
    }, {
        image: proposalImage,
        count: 64,
        title: 'Proposals',
        incOrDec: 0.7,
        isInc: false
    }, {
        image: appointementImage,
        count: 64,
        title: 'Appointment',
        incOrDec: 2.6,
        isInc: true
    }]
    const tableData = [{ avatar: '', name: 'Nani', status: 'New', email: 'nani@yopmail.com', createdAt: '', assignee: 'Carrie Harris' }, { avatar: '', name: 'Nani', status: 'New', email: 'nani@yopmail.com', createdAt: '', assignee: 'Carrie Harris' }, { avatar: '', name: 'Nani', status: 'New', email: 'nani@yopmail.com', createdAt: '', assignee: 'Carrie Harris' }, { avatar: '', name: 'Nani', status: 'New', email: 'nani@yopmail.com', createdAt: '', assignee: 'Carrie Harris' }, { avatar: '', name: 'Nani', status: 'New', email: 'nani@yopmail.com', createdAt: '', assignee: 'Carrie Harris' }, { avatar: '', name: 'Nani', status: 'New', email: 'nani@yopmail.com', createdAt: '', assignee: 'Carrie Harris' }]
    return (
        <Box width={"95%"} margin="auto" mt={2}>
            <Grid container spacing={2}>
                {
                    insightsData.map((insight) => (
                        <Grid item xs={12} md={6} lg={3}>
                            <Card insight={insight} />
                        </Grid>
                    ))
                }
            </Grid>
            <Grid container spacing={2} mt={1}>
                <Grid item xs={12} md={8}>
                    <Box border={"1px solid #374151"}>
                        <BarGraph />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box border={"1px solid #374151"}>
                        <ProgressBar progress={20} />
                    </Box>
                </Grid>
            </Grid>
            <Grid container display={'flex'} spacing={5} mt={1}>
                <Grid item xs={12} md={3}>
                    <Button sx={{
                        textTransform: 'none', bgcolor: 'rgba(55, 65, 81, 1)', color: 'white', width: "100%", '&:hover': {
                            bgcolor: 'rgba(55, 65, 81, 1)'
                        }
                    }}>New</Button>
                </Grid>
                <Grid item xs={12} md={3}>

                    <Button sx={{
                        textTransform: 'none', bgcolor: 'rgba(55, 65, 81, 1)', color: 'white', width: "100%", '&:hover': {
                            bgcolor: 'rgba(55, 65, 81, 1)'
                        }
                    }}>No Show</Button>
                </Grid>
                <Grid item xs={12} md={3}>

                    <Button sx={{
                        textTransform: 'none', bgcolor: 'rgba(55, 65, 81, 1)', color: 'white', width: "100%", '&:hover': {
                            bgcolor: 'rgba(55, 65, 81, 1)'
                        }
                    }}>Target</Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button sx={{
                        textTransform: 'none', bgcolor: 'rgba(55, 65, 81, 1)', color: 'white', width: "100%", '&:hover': {
                            bgcolor: 'rgba(55, 65, 81, 1)'
                        }
                    }}>Paid</Button>
                </Grid>
            </Grid>
            <Box border={'1px solid #374151'} mt={4} >
                <Box display={'flex'} justifyContent="space-between" p={2}>
                    <Typography color="white" fontFamily="inter" fontSize="16px" fontWeight={500}>Leads</Typography>
                    <Button sx={{
                        textTransform: 'none', bgcolor: 'rgba(55, 65, 81, 1)', color: 'white', width: "10%", '&:hover': {
                            bgcolor: 'rgba(55, 65, 81, 1)'
                        }
                    }}>View All Leads</Button>
                </Box>
                <CustomTable tableData={tableData} />
            </Box>
        </Box>
    )
}

export default Insights