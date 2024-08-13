import React, {useEffect, useState} from "react";

const RevealError:  React.FC<RevealErrorProps> = ({error, hash}) => {
    const [errorText, setErrorText] = useState<string>('');
    useEffect(() => {
        if (error.message.includes('404')) {
            setErrorText( `Looks like it has never existed a secret ${hash?.substring(0, 32)}...\n Maybe it has already been revealed or has expired in the meantime.`);
        } else if (error.message.includes('500')) {
            setErrorText('Server error!');
        } else {
            setErrorText(error.message);
        }
    }, [error, hash]);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>
                <i>{errorText}</i>
            </p>
        </div>
    );
}

export default RevealError;