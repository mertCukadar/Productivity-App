import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // Import your custom CSS file if needed

const Login = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-12">
          <div className="card bg-dark text-white custom-card">
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-5 pb-5">
                <h2 className="fw-bold mb-2 text-uppercase pb-4">Login</h2>

                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    className="form-control form-control-lg custom-placeholder"
                    placeholder="Email"
                  />
                </div>

                <div className="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    className="form-control form-control-lg custom-placeholder"
                    placeholder="Password"
                  />
                </div>

                <p className="small mb-5 pb-lg-2">
                  <a className="text-white-50" href="#!">
                    Forgot password?
                  </a>
                </p>

                <button
                  className="btn btn-outline-light btn-lg px-5"
                  type="submit"
                >
                  Login
                </button>
              </div>

              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="text-white-50 fw-bold">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
