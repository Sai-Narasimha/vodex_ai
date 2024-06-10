import { Box,  Button,  Typography } from '@mui/material'
import React from 'react'
import HomeNav from '../components/HomeNav'
import logo from '../assets/logo.svg'
import backDropImg from '../assets/backgroundImg.svg'
import botLogo from '../assets/bot.svg'
const Home = () => {
    const sections = [{ title: 'About', path: '/about' }, { title: 'How It Works', path: '/howItWorks' }, { title: 'Price', path: '/price' }]
    return (
        <Box>
            <HomeNav logo={logo} sections={sections} btnText="Login / Signup" />
            <Box style={{
                backgroundImage: `url(${backDropImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '94vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflowY: 'hidden',
            }}>
                <Box height={790} width={790} borderRadius={"100%"} bgcolor="rgba(61, 73, 96, 0.53)" display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box height={610} width={610} borderRadius={"100%"} bgcolor="rgba(15, 27, 49, 0.7)" display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Box width="65%">
                            <img src={botLogo} alt="" width="128px" height="142px" />
                            <Typography fontFamily="Mulish" color="white" fontSize="52px">Automate your
                                pre-sales</Typography>
                            <Typography fontFamily="MulishLight" color="white" fontSize="14px" fontWeight={500} mt={2}>
                                <span style={{ color: 'rgba(255, 77, 0, 1)' }}>Recently received</span> <span style={{ color: 'rgba(255, 77, 0, 1)', textDecoration: 'underline', cursor: 'pointer' }}>$2 million</span> in seed funding.
                            </Typography>
                            <Button sx={{ backgroundColor: 'rgba(255, 77, 0, 1)', color: 'white', borderRadius: '25px', fontSize: '10px', marginRight: '20px',marginTop:'25px', paddingY: '4px', paddingX: 3 }}>Start a Conversation</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Home


const styles = {
    boxStyle: {

    }
}