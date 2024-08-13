import React, {useState} from "react";
import {Box, Button, Grid} from "@mui/material";
import {useParams} from "react-router-dom";
import SecretRevelSidebar from "../../components/SecretRevealSidebar";
import {getSecretData} from "./loader/getSecretData";
import RevealError from "../RevealError";
import './index.css';

const Generated: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);
    const [revealed, setRevealed] = useState<boolean>(false);
    const [errorCode, setErrorCode] = useState<Error | null>(null);
    const [result, setResult] = useState<SecretData | null>(null);

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
            <div className={`blur-overlay ${openSidebar ? 'visible' : ''}`}></div>
            {errorCode ? (
                <RevealError error={errorCode} hash={id}/>
            ) : (
                <Box>
                    <h1>Reveal Secret!</h1>
                    <SecretRevelSidebar open={openSidebar} setOpen={setOpenSidebar} data={result}/>
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
        </Box>
    );
};

export default Generated;
