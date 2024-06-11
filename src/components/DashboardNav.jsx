import { Box, Typography } from '@mui/material'
import React from 'react'
import menuIcon from '../assets/menu.svg'
import searchIcon from '../assets/search.svg'
import notificationIcon from '../assets/bell.svg'
import settingIcon from '../assets/settings.svg'
const DashboardNav = () => {
    return (
        <>
            <Box borderBottom={'1px solid #374151'} display="flex" justifyContent={'space-between'} alignItems={'center'} p={1} px={2} height={'40px'}>
                <Box display={'flex'} gap={2}>
                    <img src={menuIcon} alt="menu_logo" width="24px" />
                    <img src={searchIcon} alt="search_logo" width="24px" />
                </Box>
                <Box display={'flex'} gap={2} alignItems={'center'}>
                    <Box  width="35px" height="35px" borderRadius={'100%'}>
                        <img src="https://tse2.mm.bing.net/th?id=OIP.sWCvltMZF_s3mjA5sL-RdgHaE8&pid=Api&P=0&h=220" alt="" width={35} height={35} style={{ borderRadius: '100%' }} />
                    </Box>
                    <img src={notificationIcon} alt="notify_logo" width="24px" />
                    <img src={settingIcon} alt="setting_logo" width="24px" />
                    <Box display={'flex'} alignItems={'center'}>
                        <Box width="35px" height="35px" borderRadius={'100%'}>
                            <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" alt="" width={35} />
                        </Box>
                        <Box textAlign={'left'}>
                            <Typography fontSize={"10px"} fontFamily="MulishLight">
                                Role
                            </Typography>
                            <Typography fontSize={"10px"} fontFamily="Mulish">
                                name
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DashboardNav