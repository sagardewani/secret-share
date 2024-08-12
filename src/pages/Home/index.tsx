import React from "react";
import { Grid, Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import SecretForm from "../../components/SecretForm";
import {SecretFormData} from "../../types/components/secret_form";
import logo from "../../assets/logo.svg";
import "./index.css";

const Home: React.FC = () => {
    const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);
    const handleFormSubmit = (data: SecretFormData) => {
        console.log('Form Data:', data);
        // Implement your logic to handle the form submission here
    };
    return (
        <Box id="home" sx={{ flexGrow: 1 }}>
            <Sidebar open={openSidebar} setOpen={setOpenSidebar} data={Object.create({})} />
            <Grid container spacing={0} alignItems="center" className="homeContainer">
                <Grid item xs={12} md={5} className="logoContainer">
                    <img src={logo} alt="Secret Share Logo" className="logo" />
                </Grid>
                <Grid item xs={12} md={6} className="formContainer">
                    <SecretForm onFormSubmit={handleFormSubmit} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
