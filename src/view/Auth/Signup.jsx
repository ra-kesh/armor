import { useAuth } from "../../hooks";
import { useLocation } from "react-router-dom";
import { SignUpForm } from "../../component/Form/SignUpForm";

export const Signup = () => {
  const location = useLocation();
  const path = location.state?.from;

  const { signup, loading, error } = useAuth();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {error ? <h4>{error}</h4> : null}
          {loading ? <h4>loading</h4> : null}

          <div>
            <SignUpForm path={path} signup={signup} />
          </div>
        </div>
      </div>
    </>
  );
};
