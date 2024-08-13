import React, {useEffect, useState} from "react";
import {Grid, Box, Alert, Snackbar} from "@mui/material";
import SecretForm from "../../components/SecretForm";
import {SecretFormData} from "../../types/components/secretForm";
import logo from "../../assets/logo.svg";
import "./index.css";
import axios from "axios";
import SecretShareSidebar from "../../components/SecretShareSidebar";

// Assume BASE_URL is defined in your .env file as REACT_APP_BASE_URL
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';


const Home: React.FC = () => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);
    const [sidebarData, setSidebarData] = useState<SecretData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (sidebarData) {
            setOpenSidebar(true);  // Open sidebar only after data is set
        }
    }, [sidebarData]); // Dependency on sidebarData


    const handleFormSubmit = (data: SecretFormData) => {
        axios.post(`${BASE_URL}/secret`, data)
            .then(response => {
                setSidebarData(response.data);  // Set data to open the sidebar
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.error('Server responded with a non-2xx status:', error.response.status);
                    setError(`Server error: ${error.response.data.message || error.response.statusText}`);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('No response received:', error.request);
                    setError('No response from server. Please try again later.');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error setting up request:', error.message);
                    setError('Error in request setup. Please check your network.');
                }
            });
    };

    const handleCloseSnackbar = () => {
        setError(null);
    };

    return (
        <Box id="home" sx={{ flexGrow: 1 }}>
            <SecretShareSidebar open={openSidebar} setOpen={setOpenSidebar} data={sidebarData} />
            <Grid container spacing={0} alignItems="center" className="homeContainer">
                <Grid item xs={12} md={5} className="logoContainer">
                    <img src={logo} alt="Secret Share Logo" className="logo" />
                </Grid>
                <Grid item xs={12} md={6} className="formContainer">
                    <SecretForm onFormSubmit={handleFormSubmit} />
                </Grid>
            </Grid>
            <Snackbar
                open={!!error}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Home;
