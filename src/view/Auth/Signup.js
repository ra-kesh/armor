import { useState } from "react";
import { useAuth } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const location = useLocation();
  const path = location.state?.from;

  const navigate = useNavigate();

  const { signup, loading, error } = useAuth();

  function submitHandeller(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      signup(name, email, password, path);
    }
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
                <h3>Signup...</h3>
                {loading && <div>ruko zara sabar karo</div>}
                {error && <div>{error}</div>}
              </div>
            </div>
            <div className="flex-col-lg-6 ">
              <div className="container login-container">
                <div className="login-form">
                  <form onSubmit={submitHandeller} className="login-form">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="name"
                      className="m-bottom-two form-input"
                    />
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
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="password"
                      className="m-bottom-two form-input"
                    />
                    <button>submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
