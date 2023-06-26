import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from './AuthContainer.jsx';
import axios from 'axios';

const SignUp = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { userLogin } = useAuth();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = inputs.username;
    const password = inputs.password;
    const email = inputs.email;
    const user = { username, email, password }
    try {
      let res = await axios.post(`${process.env.REACT_APP_SPRING_URL}/auth/signup`, user);
      if (res.status === 200) {
        console.log("User added")
        await userLogin({
          email: email,
          password: password
        });
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (

    <body class="vw-100 vh-100">
      <div class="d-flex d-xl-flex align-items-center align-items-xl-center justify-content-center"
        style={{ width: '100%', height: '100%' }}>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-9 col-lg-12 col-xl-10">
              <div class="card shadow-lg o-hidden border-0 my-5">
                <div class="card-body p-0">
                  <div class="row">
                    <div class="col-lg-6 d-none d-lg-flex">
                      <div class="flex-grow-1 bg-login-image"
                        style={{ backgroundImage: 'url("assets/img/durvill_logo.jpg")' }}>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="p-5">
                        <div class="text-center">
                          <h4 class="text-dark mb-4">Join Us!</h4>
                        </div>
                        <form class="user" onSubmit={handleSubmit}>
                          <div class="mb-3"><input class="form-control form-control-user" type="text"
                            id="exampleInputEmail" aria-describedby="emailHelp"
                            placeholder="Enter Email Address..." name="email" value={inputs.email || ""}
                            onChange={handleChange} /></div>
                          <div class="mb-3"><input class="form-control form-control-user"
                            type="text" id="inputText"
                            placeholder="Enter User Name" name="username" value={inputs.username || ""}
                            onChange={handleChange} /></div>
                          <div class="mb-3">
                            <div class="custom-control custom-checkbox small"></div>
                          </div>
                          <div class="mb-3"><input class="form-control form-control-user"
                            type="password" id="inputPassword"
                            placeholder="Enter Password" name="password" value={inputs.password || ""}
                            onChange={handleChange} /></div>
                          <div class="mb-3"><input class="form-control form-control-user"
                            type="password" id="inputPassword2"
                            placeholder="Re-Enter Password" name="password" /></div><button
                              class="btn btn-primary d-block btn-user w-100" type="submit"
                              style={{ background: '#01703E' }}>Login</button> {/* do this part later */}
                          <hr />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )

};

export default SignUp;