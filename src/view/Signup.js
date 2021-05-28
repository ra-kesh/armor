import { useState } from "react";
import { useAuth } from "../hooks";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup } = useAuth();

  function submitHandeller(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      signup(name, email, password);
    }
  }

  return (
    <>
      <div className="container">
        <div className="flex-row">
          <div className="flex-col-lg-6">
            <div className="container">
              <form onSubmit={submitHandeller} className="signup-form">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button>submit</button>
              </form>
            </div>
          </div>
          <div className="flex-col-lg-6">
            <div className="container center-vertically">
              <h3>signup</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
