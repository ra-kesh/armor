import { useAuth } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { SignUpForm } from "../../component/Form/SignUpForm";
import MediaQuery from "react-responsive";

export const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.state?.from;

  const { signup, loading, error } = useAuth();

  return (
    <>
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
            {error ? <h4>{error}</h4> : null}
            {loading ? <h4>loading</h4> : null}
          </div>

          <div>
            <SignUpForm path={path} signup={signup} />
          </div>
        </div>
      </div>
    </>
  );
};
