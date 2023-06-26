
const LoginView = ({ handleSubmit, handleChange, inputs, isValid, message }) => {
  return (
    <div data-testid="login" className="d-flex d-xl-flex align-items-center align-items-xl-center justify-content-center"
      style={{ width: '100%', height: '100%' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div className="flex-grow-1 bg-login-image"
                      style={{ backgroundImage: `url("assets/img/durvill_logo.jpg")` }}></div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Welcome back!</h4>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="mb-3"><input className="form-control form-control-user" type="text" aria-label="email"
                          id="exampleInputEmail" aria-describedby="emailHelp"
                          placeholder="Enter Email Address" name="email" value={inputs.email || ""} onChange={handleChange} /></div>
                        <div className="mb-3"><input className="form-control form-control-user"
                          type="password" aria-label="password" id="exampleInputPassword" placeholder="Password"
                          name="password" value={inputs.password || ""}
                          onChange={handleChange} required/></div>
                        <div className="mb-3">
                          <div className="custom-control custom-checkbox small"></div>
                        </div><button className="btn btn-primary d-block btn-user w-100" type="submit"
                          style={{ background: '#01703E' }} aria-label="submit-form">Login</button>
                        {!isValid && (
                          <div class="alert alert-danger m-3" role="alert">
                            {message}
                          </div>
                        )}

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
  )
};

export default LoginView
