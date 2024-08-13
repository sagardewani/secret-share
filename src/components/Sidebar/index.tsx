import React from "react";
import { Box, Button, Drawer, Stack, TextareaAutosize } from "@mui/material";

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, data }) => {
    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    const handleCopyToShare = () => {
        navigator.clipboard.writeText(data).then(
            () => {
                console.log("Copied to clipboard successfully!");
                // console.log(JSON.stringify(data))
                // console.log(DecryptMessage(data?.secretText, data?.hash))
            },
            (err) => {
                console.error("Failed to copy: ", err);
            }
        );
    };

    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
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
                        value={data}
                    />
                    <Button variant="outlined" color="primary" onClick={handleCopyToShare}>
                        Copy to Share.
                    </Button>
                </Stack>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
