import React, { useState, useRef } from "react";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuButtonRef = useRef(null);

  const handleChange = () => {
    setToggle((p) => !p);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navBar">
        <div className="container-fluid p-1 ">
          <div
            onClick={handleChange}
            style={{
              cursor: "pointer",
              width: "max-content",
              fontWeight: "bold",
            }}
            className="ms-2"
            ref={menuButtonRef}
          >
            {/* <i className="fa-solid fa-bars me-2 fa-xl"></i> */}
            MENU
          </div>
          {/* <div className="flex-c">
            <h5 className="p-0 m-0">Admin Dashboard</h5>
          </div> */}
        </div>
      </nav>
      {toggle ? (
        <Sidebar setMenuToggle={setToggle} menuButtonRef={menuButtonRef} />
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
