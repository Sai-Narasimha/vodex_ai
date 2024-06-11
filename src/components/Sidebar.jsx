import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import projectsIcon from '../assets/projects.svg'
import crmIcon from '../assets/userGroup.svg'
import salesIcon from '../assets/sales.svg'
import cryptoIcon from '../assets/crypto.svg'
import kbIcon from '../assets/book-open.svg'
import accountIcon from '../assets/userCircle.svg'
import welcomeIcon from '../assets/handRaised.svg'
import adIcon from '../assets/warning.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { v4 as uuidv4 } from 'uuid'
const Sidebar = () => {

    const [appOptions, setAppOptions] = useState([{
        id: uuidv4(),
        title: 'Projects',
        icon: projectsIcon,
        innerOptions: [{ title: 'project1', path: '' }],
        isOpen: false
    }, {
        id: uuidv4(),
        title: 'CRM',
        icon: crmIcon,
        innerOptions: [{ title: 'project1', path: '' }],
        isOpen: false
    }, {
        id: uuidv4(),
        title: 'Sales',
        icon: salesIcon,
        innerOptions: [{ title: 'project1', path: '' }],
        isOpen: false
    }, {
        id: uuidv4(),
        title: 'Crypto',
        icon: cryptoIcon,
        innerOptions: [{ title: 'project1', path: '' }],
        isOpen: false
    }, {
        id: uuidv4(),
        title: 'Knowledge Base',
        icon: kbIcon,
        innerOptions: [{ title: 'project1', path: '' }],
        isOpen: false
    }, {
        id: uuidv4(),
        title: 'Account',
        icon: accountIcon,
        innerOptions: [{ title: 'project1', path: '' }],
        isOpen: false
    }])

    const pagesOptions = [{ title: "Welcome", path: '/welcome', icon: welcomeIcon }, { title: "Access Denied", path: '/access', icon: adIcon }]


    const handleSetOptions = (id) => {
        setAppOptions(prevOptions =>
            prevOptions.map(option => {
                if (option.id === id) {
                    return { ...option, isOpen: !option.isOpen };
                }
                return option;
            })
        );
    };
    return (
        <>
            <Box borderRight={'1px solid #374151'} height={'100vh'} width={'15%'} bgcolor="black" overflow={'scroll'} className="hide_scrollbar" position={'fixed'}>
                <Box width={'90%'} margin={'auto'}>
                    <img src={logo} alt="" width={'160px'} style={{ marginTop: '20px' }} />
                    <Typography fontFamily="Inter" fontWeight={'bold'} textAlign="left" fontSize={14} color="white" marginLeft={'10px'} mt={1}>APPS</Typography>

                    <Box display={'flex'} flexDirection="column" gap={1} mt={1}>
                        {appOptions.map((option, index) => (
                            <Box key={option.id}>
                                <Box display={'flex'} justifyContent='space-between' alignItems={'center'} bgcolor={option.isOpen && 'rgba(55, 65, 81, 1)'} color={'rgba(156, 163, 175, 1)'} px={1} py={0.5} style={{ transition: 'background-color 0.3s ease', }}>
                                    <Box display={'flex'} gap={1} color={'rgba(156, 163, 175, 1)'} >
                                        <img src={option.icon} alt="" width={18} />
                                        <Typography textAlign={'left'} fontFamily="inter" fontSize={14}>
                                            {option.title}
                                        </Typography>
                                    </Box>
                                    <Box onClick={() => handleSetOptions(option.id, index)} style={{ cursor: 'pointer' }}>
                                        {option.isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </Box>
                                </Box>
                                <Box
                                    key={option.id}
                                    style={{
                                        maxHeight: option.isOpen ? '100px' : '0px',
                                        opacity: option.isOpen ? 1 : 0,
                                        overflow: 'hidden',
                                        transition: 'max-height 1.5s ease, opacity 0.5s ease',
                                    }}
                                >
                                    {option.isOpen &&
                                        option.innerOptions.map((innerOpt, index) => (
                                            <Box key={index}>
                                                <Typography color="white" p={1} textAlign={'left'}>
                                                    {innerOpt.title}
                                                </Typography>
                                            </Box>
                                        ))}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Typography fontFamily="Inter" fontWeight={'bold'} textAlign="left" fontSize={14} color="white" marginLeft={'10px'} mt={1}>Pages</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={1} mt={1}>
                        {pagesOptions.map((page) => (
                            <Box display={'flex'} gap={1} px={1} py={0.5}>
                                <img src={page.icon} alt="" width={18} />
                                <Typography textAlign={'left'} fontFamily="inter" fontSize={14} color={'rgba(156, 163, 175, 1)'} >
                                    {page.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Sidebar