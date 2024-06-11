import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import logo from '../assets/logo.svg'
import CustomButton from '../atoms/CustomButton';
import VoicebotForm from './VoicebotForm';
import { useNavigate } from 'react-router-dom';
const Content = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Box width={isSmallScreen ? "100%" : "70%"} margin={'auto'}>
                <img src={logo} alt="logo" style={{ marginTop: '25px' }} />
                <Box width={"70%"} margin={'auto'} marginTop={2}>
                    <Typography fontFamily={'Mulish'} fontSize={36} textAlign={"center"}>
                        Get 2x Revenue With <span style={{
                            background: 'linear-gradient(90deg, #FF4D00 18.29%, #FF9E69 45.43%, #FF4F02 61.05%, #FF9B64 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Gen A.I. Powered Sales Agent
                        </span> To Your Customers
                    </Typography>
                    <Typography fontFamily={'Mulish'} fontSize={15} width={"90%"} margin={'auto'} marginTop={3}>
                        Connect with 10,000 customers in 1 hour with real-time data insights, revolutionizing business outreach with AI-human synergy.
                    </Typography>
                </Box>
                <Box display="flex" gap={1.5} width={'fit-content'} margin={'auto'} >
                    <CustomButton onClick={() => navigate('/dashboard')} text="VISIT OUR WEBSITE" padding={'7px 35px'} borderRadius={'5px'} />
                    <CustomButton text="BOOK A MEETING" padding={'7px 35px'} borderRadius={'5px'} />
                </Box>
                <Box display={'flex'} width={'fit-content'} margin={'auto'} alignItems="center">
                    <Typography fontFamily={"Mulish"} fontSize="90px" style={{
                        background: 'linear-gradient(90deg, #FF4D00, #f05715)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>Sales</Typography>
                    <VoicebotForm />
                    <Typography fontFamily={"Mulish"} fontSize="90px" style={{
                        background: 'linear-gradient(90deg, #f99058, rgba(255, 160, 107, 1))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>Agent</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Content