import { useState } from "react";
import { Alert, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/Actions/userActions";
function Register() {
  const [cred, setCred] = useState({});
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const handleSignUp = (e) => {
    e.preventDefault();
    setShow(true);
    dispatch(register(cred));
  };
 
  const { loading, message, error } = useSelector((state) => state.register);
  return (
    <div id="main-wrapper" className="container">
      {loading && "loading"}
      {message && <p>{message.message}</p>}
      {error && (
        <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>user not created</p>
        </Alert>
      )}
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card border-0">
            <div className="card-body p-0">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="mb-5">
                      <h3 className="h4 font-weight-bold text-theme">
                        register
                      </h3>
                    </div>
                    <h6 className="h5 mb-0">Welcome back!</h6>
                    <p className="text-muted mt-2 mb-5">
                      Enter your email address and password to access admin
                      panel.
                    </p>
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          onChange={(e) =>
                            setCred({ ...cred, Name: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          onChange={(e) =>
                            setCred({ ...cred, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group mb-5">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          onChange={(e) =>
                            setCred({ ...cred, password: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group mb-5">
                        <label htmlFor="exampleInputPassword1">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          onChange={(e) =>
                            setCred({
                              ...cred,
                              confirmPassword: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group mb-5">
                        <label htmlFor="exampleInputPassword1">
                          Telephone Number
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="number"
                          onChange={(e) =>
                            setCred({
                              ...cred,
                              telephoneNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                      <DropdownButton title="who Are You" variant="success">
                    <Dropdown.Item
                      onClick={(e) => setCred({ ...cred, role: "admin" })}
                    >
                      Admin
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={(e) => setCred({ ...cred, role: "user" })}
                    >
                      User
                    </Dropdown.Item>
                  </DropdownButton>
                      <button
                        onClick={handleSignUp}
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-inline-block">
                  <div className="account-block rounded-right">
                    <div className="overlay rounded-right" />
                    <div className="account-testimonial">
                      <h4 className="text-white mb-4">
                        This beautiful theme yours!
                      </h4>
                      <p className="lead text-white">
                        "Best investment i made for a long time. Can only
                        recommend it for other users."
                      </p>
                      <p>- Admin User</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end card-body */}
          </div>

          {/* end row */}
        </div>
        {/* end col */}
      </div>
      {/* Row */}
    </div>
  );
}

export default Register;
