import React from 'react'
import { Stack, Typography, Box } from '@mui/material';
import QrPicture from '../assets/image-qr-code.png';

const QrComponent = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Stack
                sx={{
                    width: 200,
                    height: 330,
                    p: 2,
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                }}
            >
                <img src={QrPicture} style={{ borderRadius: '7px', }} />
                <Typography fontSize="17px" fontWeight="700" textAlign="center" mb="10px" mt="15px" color="#1f3251" >Improve your front-end skills by building projects</Typography>
                <Typography fontSize="12px" fontWeight="400" textAlign="center" color="#7b879d" >Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Typography>
            </Stack>
        </Box>
    )
}

export default QrComponent