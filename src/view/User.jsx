import { Navbar } from "../component";
import { useAuth } from "../hooks";

export const User = () => {
  const { logOut } = useAuth();

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flex-row">
          <div className="flex-col-lg-4">
            <span>User Details</span>
          </div>
          <div className="flex-col-lg-8 flex space-between">
            <span>User Activity</span>
            <button onClick={() => logOut()}>logout</button>
          </div>
        </div>
      </div>
    </>
  );
};
