import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    SelectChangeEvent
} from '@mui/material';
import './index.css';
import {SecretFormProps, SecretFormData} from "../../types/components/secretForm";
import {expirationOptions} from "../../constants/constant";


const SecretForm: React.FC<SecretFormProps> = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState<SecretFormData>({
        secret: '',
        expireAfter: 0,
        expireAfterViews: 10,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSelectChange = (event: SelectChangeEvent<number>) => {
        const name = event.target.name as keyof typeof formData;
        const value = event.target.value as number; // Ensuring the value is treated as a number
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onFormSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="secret-form">
            <Typography gutterBottom className={"header-title"}>
                Let's get your secret salted
            </Typography>
            <TextField
                label="Your secret"
                variant="outlined"
                name="secret"
                multiline
                fullWidth
                rows={4}
                value={formData.secret}
                onChange={handleInputChange}
                required
                inputProps={{maxLength: 500}}
            />
            <FormControl fullWidth>
                <InputLabel id="expire-label">Expires in</InputLabel>
                <Select
                    labelId="expire-label"
                    value={formData.expireAfter}
                    label="Expires in"
                    name="expireAfter"
                    onChange={handleSelectChange}
                >
                    {expirationOptions.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                label="Allowed Viwes"
                variant="outlined"
                name="expireAfterViews"
                fullWidth
                value={formData.expireAfterViews}
                onChange={handleInputChange}
                required
            />
            <Button type="submit" variant="contained" sx={{
                backgroundColor: "#637a8a",
                color: "#fff",
                marginTop: "0.4rem",
                fontWeight: "800"
            }}>
                Share Your Secret!
            </Button>
    </form>
  );
};

export default SecretForm;
