import React from 'react';
import { WebView } from 'react-native-webview';

const WebViewPassword = () => {
    return (
        <WebView
            //source={{ uri: 'http://localhost:3000/es/views/recoverPassword?step=3&mode=resetPassword&oobCode=hDKGmLcmwJgNWNZTOV0sQe5N3GsVsCganHdSt79G5j4AAAGNE1WdFA&apiKey=AIzaSyAThTZvE3UaSio6WOSoYYegWjgXoTPSaaE&lang=en' }}
            source={{ uri: 'https://www.youtube.com/' }}
            style={{ flex: 1 }}
            onLoad={() => console.log('Cargado')}
            scalesPageToFit
        />
    );
};

export default WebViewPassword;