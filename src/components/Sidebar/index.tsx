import React from "react";
import { Box, Button, Drawer, Stack, TextareaAutosize } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, data, reShare }) => {
    const navigate = useNavigate();

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    const handleCopyToShare = () => {
        navigator.clipboard.writeText(data).then(
            () => {
                console.log("Copied to clipboard successfully!");
            },
            (err) => {
                console.error("Failed to copy: ", err);
            }
        );
    };

    return (
        <Drawer open={open} onClose={toggleDrawer(false)} variant='persistent'>
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
                    {reShare && (<Button variant="outlined" color="primary" onClick={() => navigate("/")}>
                        Share another secret.
                    </Button>)}
                </Stack>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
