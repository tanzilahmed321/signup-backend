// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/login", formData);
            if (response.data.status) {
                alert(response.data.message);
                navigate('/dashboard');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>Login</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField label="Email" name="email" type="email" variant="outlined" fullWidth margin="normal" onChange={handleChange} required />
                    <TextField label="Password" name="password" type="password" variant="outlined" fullWidth margin="normal" onChange={handleChange} required />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Login</Button>
                </form>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    Don't have an account? <Link href="/signup" underline="hover">Signup</Link>
                </Typography>
            </Box>
        </Container>
    );
}

export default Login;
