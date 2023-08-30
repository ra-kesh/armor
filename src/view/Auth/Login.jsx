import React from "react";
import { LoginForm } from "../../component/Form/LoginForm";
import { useAuth } from "../../hooks";
import { useNavigate, useLocation, Link } from "react-router-dom";
import MediaQuery from "react-responsive";

export const Login = () => {
  const { error, login, loading } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const path = location.state?.from;
  const message = location.state?.message;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          margin: "3rem",
        }}
      >
        <span className="logo-text " onClick={() => navigate("/")}>
          <MediaQuery minWidth={768}>MOTO ARMOR DEPOT.</MediaQuery>
          <MediaQuery maxWidth={767}>M . A . D</MediaQuery>
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "2rem",
          }}
        >
          {error && <h4>{error}</h4>}
          {loading && <h4>loading</h4>}
          {!loading && !error && message && <h4>{message}</h4>}
        </div>

        <div>
          <LoginForm path={path} login={login} />
        </div>
        <div style={{ width: "100%", paddingLeft: "40px" }}>
          {" "}
          Don't have an account ?
          <span className="auth-signup" onClick={() => navigate("/signup")}>
            SIGN UP
          </span>{" "}
        </div>
      </div>
    </div>
  );
};
