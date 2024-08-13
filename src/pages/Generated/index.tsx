import React, {useEffect, useState} from "react";
import {Alert, Box, Button, Grid, Snackbar} from "@mui/material";
import {useParams} from "react-router-dom";
import SecretRevelSidebar from "../../components/SecretRevealSidebar";
import {getSecretData} from "./loader/getSecretData";
import RevealError from "../RevealError";

const Generated: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');
    const [revealed, setRevealed] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState<Error | null>(null);
    const [result, setResult] = useState<SecretData | null>(null);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleReveal = () => {
        if (!id) {
            setErrorCode(new Error('404'));
            return;
        }

        getSecretData(id).then((data) => {
            if (data) {
                setResult(data);
                setOpenSidebar(true);
                setRevealed(true);
            }
        }).catch((error) => {
            setErrorCode(error);
        });
    }

    return (
        <Box>
            {errorCode ? (
                <RevealError error={errorCode} hash={id} />
            ) : (
                <Box>
                    <h1>Reveal Secret!</h1>
                    <SecretRevelSidebar open={openSidebar} setOpen={setOpenSidebar} data={result} />
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Button
                                variant="outlined"
                                onClick={handleReveal}
                                sx={{
                                    backgroundColor: "#637a8a",
                                    color: "#fff",
                                    marginTop: "0.4rem",
                                    fontWeight: "800"
                                }}
                                disabled={revealed}
                            >
                                {revealed ? `Secret Revealed` : `Reveal Secret Now`}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            )}
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
