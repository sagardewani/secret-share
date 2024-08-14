import { TextField } from '@mui/material';
import styled from '@emotion/styled';

const StyledTextField = styled(TextField)`
    background-color: #b7d3d1;
    border-radius: 4px;
    & .MuiOutlinedInput-root {
        border: none;
    }
    & .MuiOutlinedInput-notchedOutline {
        border: none;
    }
`;

export default StyledTextField;