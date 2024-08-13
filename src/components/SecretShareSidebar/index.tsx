import React, {useEffect, useState} from 'react';
import { Box} from '@mui/material';
import Sidebar from "../Sidebar";

const SecretShareSidebar:  React.FC<SecretShareSidebarProps>  = ({ open, setOpen, data }) => {
    const [sidebarData, setSidebarData] = useState<string>('');

    useEffect(() => {
        if (data) {
            const createLink = () => {
                if (!data) return '';
                return `${window.location.origin}/generated/${data.hash}`;
            }
            setSidebarData(createLink());
        }
    },[data]);

    return (
        <Box sx={{ padding: 2 }}>
            <Sidebar open={open} setOpen={setOpen} data={sidebarData} />
        </Box>
    );
};

export default SecretShareSidebar;