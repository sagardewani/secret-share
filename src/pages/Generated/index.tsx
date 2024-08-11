import React from "react";
import { Grid, Box, Button } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { useLoaderData, LoaderFunction } from "react-router-dom";

// Define the return type of the API function
const testAPI = async (id: string): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(id);
        }, 2000);
    });
};

// Define the loader function with proper types
export const loader: LoaderFunction = async ({ params }) => {
    const result = await testAPI(params.id as string);
    return { result };
};

const Generated: React.FC<GeneratedProps> = (props) => {
    const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);
    const { result } = useLoaderData() as LoaderData;

    return (
        <Box>
            <h1>Reveal Secret!</h1>
            <Sidebar open={openSidebar} setOpen={setOpenSidebar} data={result} />
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
