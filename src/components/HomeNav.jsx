import { Box, Button, Drawer, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'

const HomeNav = ({ logo, sections, btnText }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    };
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" paddingX="20px">
            <img src={logo} height="40px" alt="app_logo" />
            {!isSmallScreen && (
                <Box display="flex" gap={5}>
                    {sections.map((section, index) => (
                        <Typography key={index} fontFamily="Poppins">
                            {section.title}
                        </Typography>
                    ))}

                </Box>
            )}
            {!isSmallScreen && <Button
                sx={{
                    backgroundColor: 'rgba(255, 77, 0, 1)',
                    color: 'white',
                    borderRadius: '25px',
                    fontSize: '10px',
                    marginRight: '20px',
                    paddingY: '4px',
                    paddingX: 2,
                    "&:hover": {
                        backgroundColor: "#ce4206"
                    }
                }}
            >
                {btnText}
            </Button>}
            {isSmallScreen && (
                <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)}>
                    {/* <MenuIcon /> */} open
                </IconButton>
            )}
            <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
                <Box
                    sx={{ width: 200 }}
                    role="presentation"
                    onClick={() => toggleDrawer(false)}
                    onKeyDown={() => toggleDrawer(false)}
                >
                    <Box display="flex" flexDirection="column" gap={2} padding={2}>
                        {sections.map((section, index) => (
                            <Typography key={index} fontFamily="Poppins">
                                {section.title}
                            </Typography>
                        ))}
                    </Box>


                </Box>
            </Drawer>
        </Box>

    )
}

export default HomeNav