import { LoaderFunction, json } from "react-router-dom";
import {getSecretData} from "./getSecretData";

// Define the loader function with proper types
export const loader: LoaderFunction = async ({ params }) => {
    try {
        return await getSecretData(params.id as string);
    } catch (error: any) {
        console.error('Error fetching secret data:', error.message);
        // Throw an error response that can be handled by the component or route
        throw json({ message: error.message || 'Failed to load secret data' }, { status: 500 });
    }
};