import React from "react";
import { Box, Button, Drawer, Stack, TextareaAutosize } from "@mui/material";

export default function Sidebar(props) {
  
  const toggleDrawer = (state) => () => {
    props.setOpen(state);
  }

  const handleCopyToShare = () => {

  }

  return (
      <Drawer open={props.open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 420, maxWidth: "100%", p: 2 }} role="presentation">
          <Stack sx={{ gap: 4 }}>
            <Box>
              <h1>Voila!</h1>
              <p>Secret Revealed.</p>
            </Box>
            <TextareaAutosize
              aria-label="textarea"
              placeholder="Decrypted Secret..."
              style={{ width: "100%", height: 300 }}
              readOnly
              value={props.data}
            />
            <Button variant="outlined" color="primary">Copy to Share.</Button>
          </Stack>
        </Box>
      </Drawer>
  );
}