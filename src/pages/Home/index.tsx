import React from "react";
import { Button, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar";

const Home: React.FC = () => {
    const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);

    return (
        <div id="home">
            <Sidebar open={openSidebar} setOpen={setOpenSidebar} data={Object.create({})}/>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>Add your secrets and share!</h1>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setOpenSidebar(true)}
                    >
                        Generate Sharable Secret
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
