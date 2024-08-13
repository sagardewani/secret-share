import React from "react";
import { Grid, Box, Button } from "@mui/material";
import { useLoaderData, LoaderFunction } from "react-router-dom";
import axios from "axios";
import SecretRevelSidebar from "../../components/SecretRevealSidebar";


// Assume BASE_URL is defined in your .env file as REACT_APP_BASE_URL
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

// Define the return type of the API function
const getSecretData = (id: string): Promise<string> => {
    return axios.get(`${BASE_URL}/secret/${id}`)
        .then(response => {
            // Return the secret data
            return response.data;
        })
        .catch(error => {
            // Handle errors and throw them for the caller to handle
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Server responded with a non-2xx status:', error.response.status);
                throw new Error(`Server error: ${error.response.data.message || error.response.statusText}`);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
                throw new Error('No response from server. Please try again later.');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up request:', error.message);
                throw new Error('Error in request setup. Please check your network.');
            }
        });
};

// Define the loader function with proper types
export const loader: LoaderFunction =  ({ params }) => {
    const result = getSecretData(params.id as string);
    return { result };
};

const Generated: React.FC<GeneratedProps> = (props) => {
    const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);
    const { result } = useLoaderData() as LoaderData;

    return (
        <Box>
            <h1>Reveal Secret!</h1>
            <SecretRevelSidebar open={openSidebar} setOpen={setOpenSidebar} data={result} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setOpenSidebar(true)}
                    >
                        Reveal Now
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Generated;
