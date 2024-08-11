import { useRouteError } from "react-router-dom";
import {RouteError} from "../../types/common";

export default function ErrorPage() {
    const error = useRouteError() as RouteError;

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, something unexpected happened.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}