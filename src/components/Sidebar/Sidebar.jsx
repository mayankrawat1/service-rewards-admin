import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Sidebar.css";

const Sidebar = ({ setMenuToggle, menuButtonRef }) => {
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
                navigate(`/reward-point`);
                setMenuToggle(false);
              }}
            >
              {/* <i className="fa-brands fa-slack me-2 ms-1"></i> */}
              Reward-Point
            </button>
            <button
              type="button"
              className="btn menuBtn rounded-0 dropdown-toggle text-start p-2 text-white"
              onClick={() => {
                navigate(`/reward-badge`);
                setMenuToggle(false);
              }}
            >
              {/* <i className="fa-brands fa-slack me-2 ms-1"></i> */}
              Reward-Badge
            </button>
            <button
              type="button"
              className="btn menuBtn rounded-0 dropdown-toggle text-start p-2 text-white"
              onClick={() => {
                navigate(`/`);
                setMenuToggle(false);
                toast.success("User logout successfully");
              }}
            >
              {/* <i className="fa-brands fa-slack me-2 ms-1"></i> */}
              Logout
            </button>
          </>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
