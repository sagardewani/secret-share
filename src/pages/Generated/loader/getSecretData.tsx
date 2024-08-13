// Define the return type of the API function
import axios from "axios";
import {BASE_URL} from "../../../constants/constant";

export const getSecretData = async (id: string): Promise<SecretData> => {
    try {
        const response = await axios.get(`${BASE_URL}/secret/${id}`);
        // Return the secret data
        return response.data;
    } catch (error: any) {
        // Handle errors and throw them for the caller to handle
        if (error.response) {
            console.error('Server responded with a non-2xx status:', error.response.status);
            if (error.response.status === 404)
                throw new Error(`Looks like it has never existed a secret ${id.substring(0, 32)}...\n Maybe it has already been revealed or has expired in the meantime.`);
            else
                throw new Error(`${error.response.data.message || error.response.statusText}`);
        } else if (error.request) {
            console.error('No response received:', error.request);
            throw new Error('No response from server. Please try again later.');
        } else {
            console.error('Error setting up request:', error.message);
            throw new Error('Error in request setup. Please check your network.');
        }
    }
};