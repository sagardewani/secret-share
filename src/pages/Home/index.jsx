import React from "react";
import { Button, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar";


export default function Home() {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  return (
    <div id="home">
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Add your secrets and share!</h1>
          <Button variant="outlined" color="primary" onClick={() => setOpenSidebar(true)}>Generate Sharable Secret</Button>
        </Grid>
      </Grid>
    </div>
  );
}