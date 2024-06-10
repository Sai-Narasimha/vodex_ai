import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const HomeNav = ({ logo, sections, btnText }) => {
    return (
        <Box display={'flex'} justifyContent='space-between' alignItems="center" paddingX="20px">
            <img src={logo} height="40px" alt={"app_logo"} />
            <Box display={'flex'} gap={5}>
                {sections.map((section, index) => (
                    <Typography key={index} fontFamily={'Poppins'}>
                        {section.title}
                    </Typography>
                ))}
            </Box>
            <Button sx={{ backgroundColor: 'rgba(255, 77, 0, 1)', color: 'white', borderRadius: '25px', fontSize: '10px', marginRight: '20px', paddingY: '4px', paddingX: 2 }}>{btnText}</Button>

        </Box>
    )
}

export default HomeNav