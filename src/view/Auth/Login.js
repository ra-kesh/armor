import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.state?.from;
  const message = location.state?.message;

  function submitHandeller(e) {
    e.preventDefault();
    login(email, password, path);
  }

  return (
    <>
      <div className="container">
        <div className=" center-vertically">
          <div className="flex-row login-wrapper">
            <div
              className="flex-col-lg-12 pointer"
              onClick={() => navigate("/")}
            >
              <h3>MOTO ARMOUR DEPOT.</h3>
            </div>
            <div className="flex-col-lg-6 center-vertically">
              <div className="container">
                <h3>Login...</h3>
                {loading && <div>ruko zara sabar karo</div>}
                {error && <div>{error}</div>}
                {!loading && !error && message && <div>{message}</div>}
              </div>
            </div>
            <div className="flex-col-lg-6 ">
              <div className="container login-container">
                <div className="login-form">
                  <form onSubmit={submitHandeller} className="login-form">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email"
                      className="m-bottom-two form-input"
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password"
                      className="m-bottom-two form-input"
                    />
                    <button>submit</button>
                  </form>
                </div>
                <div className="container flex space-evenly m-top-two">
                  <div>
                    <h5>New Here ? Wanna Signup ..</h5>
                  </div>
                  <div className="center-vertically">
                    <button onClick={() => navigate("/signup")}>signup</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
