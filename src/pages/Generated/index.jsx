import React from "react";
import { Grid, Box, Button } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { useLoaderData } from "react-router-dom";

const testAPI = async (id) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(id)
    }, 2000);
  });
}

export async function loader({ params }) {
  const result = await testAPI(params.id);
  return { result };
}

export default function Generated (props) {
  const [openSidebar, setOpenSidebar] = React.useState(false);
  const { result } = useLoaderData();

  return (
    <Box>
      <h1>Reveal Secret!</h1>
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} data={result} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="outlined" color="primary" onClick={() => setOpenSidebar(true)}>Reveal Now</Button>
        </Grid>
      </Grid>
    </Box>
  );
}