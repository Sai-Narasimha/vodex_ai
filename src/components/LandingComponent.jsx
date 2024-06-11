import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import backDropImg from '../assets/backgroundImg.svg'
import botLogo from '../assets/bot.svg'
import meetingLogo from '../assets/meeting.svg'
import CustomButton from '../atoms/CustomButton'
const LandingComponent = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    return (
        <>
            <Box
                style={{
                    backgroundImage: `url(${backDropImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '94vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflowY: 'hidden',
                }}
            >
                <Box
                    height={isSmallScreen ? 400 : isMediumScreen ? 600 : 790}
                    width={isSmallScreen ? 400 : isMediumScreen ? 600 : 790}
                    borderRadius="100%"
                    bgcolor="rgba(61, 73, 96, 0.53)"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        height={isSmallScreen ? 60 : isMediumScreen ? 90 : 115}
                        width={isSmallScreen ? 60 : isMediumScreen ? 90 : 115}
                        borderRadius="100%"
                        bgcolor="rgba(255, 77, 0, 1)"
                        position="absolute"
                        right={isSmallScreen ? "10%" : isMediumScreen ? "15%" : "20%"}
                        top={isSmallScreen ? "20%" : isMediumScreen ? "25%" : "31%"}
                    >
                        <img src={meetingLogo} alt="" width={isSmallScreen ? 10 : isMediumScreen ? 14 : 18} style={{ marginTop: isSmallScreen ? '10px' : isMediumScreen ? '15px' : '20px' }} />
                        <Typography fontFamily="MulishLight" fontSize={isSmallScreen ? "8px" : isMediumScreen ? "10px" : "11px"} px={1.5} color="white" fontWeight={600}>
                            Book a 30 minutes meeting with us
                        </Typography>
                    </Box>
                    <Box
                        height={isSmallScreen ? 300 : isMediumScreen ? 450 : 610}
                        width={isSmallScreen ? 300 : isMediumScreen ? 450 : 610}
                        borderRadius="100%"
                        bgcolor="rgba(15, 27, 49, 0.7)"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box width="65%">
                            <img src={botLogo} alt="" width={isSmallScreen ? "64px" : isMediumScreen ? "96px" : "128px"} height={isSmallScreen ? "71px" : isMediumScreen ? "107px" : "142px"} />
                            <Typography fontFamily="Mulish" color="white" fontSize={isSmallScreen ? "26px" : isMediumScreen ? "39px" : "52px"}>
                                Automate your pre-sales
                            </Typography>
                            <Typography fontFamily="MulishLight" color="white" fontSize={isSmallScreen ? "10px" : isMediumScreen ? "12px" : "14px"} fontWeight={500} mt={2}>
                                <span style={{ color: 'rgba(255, 77, 0, 1)' }}>Recently received</span> <span style={{ color: 'rgba(255, 77, 0, 1)', textDecoration: 'underline', cursor: 'pointer' }}>$2 million</span> in seed funding.
                            </Typography>
                            <CustomButton
                                text=" Start a Conversation"
                                padding={'5px 20px '}
                            />


                        </Box>
                    </Box>
                </Box>
            </Box></>
    )
}

export default LandingComponent