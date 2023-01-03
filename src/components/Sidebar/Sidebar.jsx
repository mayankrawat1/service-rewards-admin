import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ setMenuToggle, menuButtonRef }) {
  const navigate = useNavigate();
  const menuRef = useRef(null);

  function useOutsideAlerter(ref, menuButtonRef) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (ref.current && menuButtonRef.current.contains(event.target)) {
            setMenuToggle((p) => p);
          } else {
            setMenuToggle(false);
          }
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(menuRef, menuButtonRef);

  return (
    <div className="text-white mainMenu" ref={menuRef}>
      <div className=" text-white "></div>
      <div className="p-0" style={{ height: "95%" }}>
        <div className="btn-group dropend d-flex flex-column w-100 ">
          <>
            <button
              type="button"
              className="btn menuBtn rounded-0 dropdown-toggle text-start p-2 text-white"
              onClick={() => {
                navigate(`/`);
                setMenuToggle(false);
              }}
            >
              {/* <i className="fa-brands fa-slack me-2 ms-1"></i> */}
              Login
            </button>
            <button
              type="button"
              className="btn menuBtn rounded-0 dropdown-toggle text-start p-2 text-white"
              onClick={() => {
                navigate(`/dash`);
                setMenuToggle(false);
              }}
            >
              {/* <i className="fa-brands fa-slack me-2 ms-1"></i> */}
              Dashboard
            </button>
          </>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
