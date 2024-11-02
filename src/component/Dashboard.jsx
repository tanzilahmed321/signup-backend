// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>Welcome to the Dashboard</Typography>
                <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ mt: 3 }}>
                    Logout
                </Button>
            </Box>
        </Container>
    );
}

export default Dashboard;
