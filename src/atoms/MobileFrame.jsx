import React from 'react';
import { Box } from '@mui/material';
import VoicebotForm from "../components/VoicebotForm"
import mobFrame from '../assets/mobFrame.svg'
const MobileFrame = ({ children }) => {
  return (
    <Box
      sx={{
        border: '1px solid #ccc',
       
        boxShadow: 5,
        overflow: 'hidden',
        maxWidth: 300, // Adjust this width to match your mobile screen size
        margin: 'auto',
        mt: 5,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundImage: `url(${mobFrame})`,
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      />
      {children}
    </Box>
  );
};

const MobileFrameWrapper = () => {
  return (
    <MobileFrame>
      <VoicebotForm />
    </MobileFrame>
  );
};

export default MobileFrameWrapper;
