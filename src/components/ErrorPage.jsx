import { useLocation } from 'react-router-dom'
import { useState } from 'react';
const ErrorPage = () => {
    const location = useLocation();
    const [errorMessage, setErrorMessage] = useState( location.state ? location.state.errorMessage : "No errors occured")

    return (
        <h1>{errorMessage}</h1>
    )
  };
  
  export default ErrorPage;