import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/styles.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <GoogleOAuthProvider clientId="214891475389-cf194fvkalp6ukrhge6uoofsvq2ce0np.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>;
      
    </Provider>
);

