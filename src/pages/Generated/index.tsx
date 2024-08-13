import React, {useEffect, useState} from "react";
import {Alert, Box, Button, Grid, Snackbar} from "@mui/material";
import { useLoaderData, useRouteError} from "react-router-dom";
import SecretRevelSidebar from "../../components/SecretRevealSidebar";

const Generated: React.FC = () => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');
    const [revealed, setRevealed] = useState<boolean>(false);
    const result  = useLoaderData() as SecretData;
    const error = useRouteError();

    useEffect(() => {
        if (error) {
            setSnackbarMessage((error as any).message || 'An unknown error occurred');
            setSnackbarOpen(true);
        }
    }, [error]);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleReveal = () => {
        setOpenSidebar(true);
        setRevealed(true);
    }

    return (
        <Box>
            <h1>Reveal Secret!</h1>
            <SecretRevelSidebar open={openSidebar} setOpen={setOpenSidebar} data={result} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button variant="outlined" onClick={handleReveal} sx={{
                        backgroundColor: "#637a8a",
                        color: "#fff",
                        marginTop: "0.4rem",
                        fontWeight: "800"
                    }}
                    disabled={revealed}>
                        {revealed ? `Secret Revealed` : `Reveal Secret Now`}
                    </Button>
                </Grid>
            </Grid>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Generated;
