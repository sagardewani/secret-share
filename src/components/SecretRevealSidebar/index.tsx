import React, {useEffect, useState} from 'react';
import { Box } from '@mui/material';
import Sidebar from "../Sidebar";
import {DecryptMessage} from "../../utilities/encryption/decoding";

const SecretRevelSidebar:  React.FC<SecretRevelSidebarProps>  = ({ open, setOpen, data }) => {
    const [sidebarData, setSidebarData] = useState<string>('');

    useEffect(() => {
        if (data) {
            const getSecretData = () => {
                if (!data) return '';
                return DecryptMessage(data.secretText, data.hash);
            };
            setSidebarData(getSecretData());
        }
    },[data]);

    return (
        <Box sx={{ padding: 2 }}>
            <Sidebar open={open} setOpen={setOpen} data={sidebarData} />
        </Box>
    );
};

export default SecretRevelSidebar;