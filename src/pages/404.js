import React from "react";
import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";

const primary = purple[500]; // #f44336

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: primary,
    }}
  >
    <Typography variant="h1" style={{ color: 'white' }}>
      404
    </Typography>
    <Typography className="mb-10" variant="h6" style={{ color: 'white', marginBottom: '20px' }}>
      The page you’re looking for doesn’t exist.
    </Typography>
    <Button className="mt-10" variant="contained" onClick={() => navigate('/dashboard')}>Back Home</Button>
  </Box>
  );
}
