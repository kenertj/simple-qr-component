import logo from './logo.svg';
import './App.css';
import { Stack, Typography } from '@mui/material';

import QrPicture from './assets/image-qr-code.png';

function App() {
  return (


    <Stack
      sx={{
        width: 200,
        height: 300,
        p: 2,

        backgroundColor: '#fff'

      }}
    >
      <img src={QrPicture} />
      <Typography fontSize="15px" fontWeight="700" color="#3A1212" textAlign="center" mb="2px" >Improve your front-end skills by building projects</Typography>
      <Typography fontSize="11px" fontWeight="400" color="#3A1212" textAlign="center" >Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Typography>
    </Stack>


  );
}

export default App;
