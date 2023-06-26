import { useState } from 'react';
import useAuth from './AuthContainer.jsx';

const useLoginForm = () => {
  const [inputs, setInputs] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");
  const { userLogin } = useAuth();
  const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (regexExp.test(inputs.email)) {
      try{
        const res = await userLogin(inputs);
        if (res.status === 401) {
          setIsValid(false);
          setMessage("Incorrect email or password. Please try again.")
        }
        else if (res.status === 500) {
          setIsValid(false);
          setMessage("Something went wrong when connecting to server.")
        }
      }catch(error) {
        setIsValid(false);
        setMessage("Network error occured.")
      }
      } 
    else {
      setIsValid(false);
      setMessage("Invalid email address")
    }
  }

  return { inputs, setInputs, handleChange, handleSubmit, isValid, message }

};

export default useLoginForm;