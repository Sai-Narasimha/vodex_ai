import React from 'react';
import { Button, useMediaQuery, useTheme } from '@mui/material';

const CustomButton = ({ text, padding, borderRadius, onClick }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Button
            sx={{
                backgroundColor: 'rgba(255, 77, 0, 1)',
                color: 'white',
                borderRadius: borderRadius || '25px',
                fontSize: isSmallScreen ? '8px' : isMediumScreen ? '9px' : '10px',
                marginTop: '25px',
                padding: padding || (isSmallScreen ? '2px 4px' : isMediumScreen ? '4px 6px' : '6px 8px'),
                "&:hover": {
                    backgroundColor: "#ce4206"
                }
            }}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default CustomButton;
