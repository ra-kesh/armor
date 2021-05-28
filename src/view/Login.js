import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.state?.from;

  function submitHandeller(e) {
    e.preventDefault();
    login(email, password, path);
  }

  return (
    <>
      <div className="container">
        <div className="flex-row">
          <div className="flex-col-lg-6">
            <div className="container">
              {loading && <div>ruko zara sabar karo</div>}
              {error && <div>{error}</div>}
              <form onSubmit={submitHandeller} className="login-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button>submit</button>
              </form>
              <div className="container">
                <h5>new user ? signup here</h5>
                <button onClick={() => navigate("/signup")}>signup</button>
              </div>
            </div>
          </div>
          <div className="flex-col-lg-6">
            <div className="container center-vertically">
              <h3>Login</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
