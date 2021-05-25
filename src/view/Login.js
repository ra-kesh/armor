import { useState, useEffect } from "react";
import { useAuth } from "../hooks";

export const Login = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState("form");

  const { error, userInfo, login, loading, logOut } = useAuth();

  useEffect(() => {
    if (userInfo) {
      setView("message");
    }
  }, [userInfo]);

  console.log(userInfo);

  function submitHandeller(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <>
      <div className="container">
        <div className="flex-row">
          <div className="flex-col-lg-6">
            <div className="container">
              {loading && <div>ruko zara sabar karo</div>}
              {error && <div>{error}</div>}
              {view === "message" && (
                <div>
                  <h1>login ho gaya.. ab kya logOut karn hai</h1>
                  <button onClick={() => logOut()}>haan</button>
                </div>
              )}

              {view === "form" && (
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
              )}
              <div className="container">
                <h5>new user ? signup here</h5>
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
