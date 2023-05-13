import React, { useEffect, useRef, useState } from "react";
import "../Styles/SomeFilter.css";
import ArrDown from "../assets/icon-arrow-down.svg";
import ArrowUp from "../assets/icon-arrow-up.svg";

const MySelect = (props) => {
  const [toggle, setToggle] = useState(false);
  const handleChange = (e) => {
    props.change(e.target.value);
  };

  const menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <div className="filter-container">
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className="togglebtn"
        >
          <span>Filter by status</span>

          {toggle === true ? (
            <i class="fa fa-angle-up color-up" aria-hidden="true"></i>
          ) : (
            <img src={ArrDown} alt="" />
          )}
        </button>

        {toggle && (
          <div onChange={handleChange} className="menu-list " ref={menuRef}>
            {/* <p className="toggle-container">
              <input type="checkbox" value="All" />{" "}
              <span className="checkmark">Filter</span>
            </p> */}
            <p>
              <input type="checkbox" value="Paid" />{" "}
              <span className="checkmark">Paid</span>
            </p>
            <p>
              <input type="checkbox" value="Pending" />{" "}
              <span className="checkmark">Pending</span>
            </p>
            <p>
              <input type="checkbox" value="Draft" />{" "}
              <span className="checkmark">Draft</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default MySelect;
