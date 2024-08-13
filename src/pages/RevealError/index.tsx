import { useRouteError } from "react-router-dom";
import {RouteError} from "../../types/common";

export default function RevealError() {
    const error = useRouteError() as RouteError;
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>
                <i>{error.data.message || error.statusText}</i>
            </p>
        </div>
    );
}