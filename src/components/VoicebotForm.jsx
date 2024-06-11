import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import voicebotImage from '../assets/colorRobo.svg';
import wave from '../assets/wave.svg';
import mobFrame from '../assets/mobFrame.svg';
const VoicebotForm = () => {
  return (
    <Box width={"370px"}>
      <Box
        sx={{
          width: '370px',
          height: '650px',
          backgroundImage: `url(${mobFrame})`,
          backgroundSize: 'cover',
          border: '1px solid white',
          margin: 'auto'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 8,
            boxShadow: 3,
            padding: 2,
            height: '555px',
            margin: 'auto',
            mt: 5,
            maxWidth: 250,
          }}
        >

          <img src={voicebotImage} alt="webbot_img" width="200" style={{ marginTop: '10px' }} />
          <img src={wave} alt="webbot_img" style={{ marginTop: '20px', width: '100%' }} />
          <Typography fontFamily={'Mulish'} marginTop={2}>
            Talk to our voicebot
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              mt: 3,
            }}
          >
            <TextField
              placeholder="Full Name"
              variant="outlined"
              margin="normal"
              required
              sx={{
                width: '90%', margin: 'auto', marginBottom: "20px", '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                  padding: '7px'
                }
              }} // Adjusted spacing between fields
            />
            <TextField
              placeholder="Email"
              variant="outlined"
              margin="normal"

              required
              sx={{
                width: '90%', margin: 'auto', marginBottom: "20px", '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                  padding: '7px'
                }
              }} // Adjusted spacing between fields
            />
            <TextField
              placeholder="Phone"
              variant="outlined"
              margin="normal"

              required
              sx={{
                width: '90%', margin: 'auto', marginBottom: "25px", '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                  padding: '7px'
                }
              }} // Adjusted spacing between fields
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, backgroundColor: '#ff5722', ':hover': { backgroundColor: '#e64a19' }, width: "80%", margin: 'auto', fontSize: '12px' }}

            >
              Request a Call Back
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VoicebotForm;
