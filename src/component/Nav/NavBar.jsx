import { Loader } from "./Loader";
import MediaQuery from "react-responsive";
import DesktopBar from "./DesktopBar";
import { MobileBar } from "./MobileBar";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

export const Navbar = ({ isLoading = false }) => {
  const [show, setShow] = useState(false);

  return (
    <header role="banner">
      <div className="site-nav-top">
        <div className="container">
          <div
            className="flex-row center-vertically"
            style={{ height: "5rem" }}
          >
            <div className="flex-col-xl-4 text-center">
              <span className="logo-text ">
                <MediaQuery minWidth={768}>MOTO ARMOR DEPOT.</MediaQuery>
                <MediaQuery maxWidth={767}>M . A . D</MediaQuery>
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar text-center"
        role="navigation"
        style={{ position: "relative" }}
      >
        <div className="container">
          <MediaQuery minWidth={1224}>
            <DesktopBar />
          </MediaQuery>
          <MediaQuery maxWidth={1224}>
            <MobileBar setShow={setShow} show={show} />
          </MediaQuery>
        </div>
      </nav>
      <Loader isLoading={isLoading} />
      {show && (
        <MediaQuery maxWidth={1224}>
          <DropDownMenu />
        </MediaQuery>
      )}
    </header>
  );
};
