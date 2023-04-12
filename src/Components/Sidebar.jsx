import React, { useContext } from "react";
import Avatar from "./Avatar";
import Theme from "./Theme";
import Logo from "../assets/logo.svg";
import SidebarStyles from "../Styles/SidebarStyles";

export default function Sidebar() {
  const Component = () => {
    return (
      <div className={classes.Sidebar}>
        <div className="Sidebar-Logo">
          <img src={Logo} alt="logo" />
          <div className="light-overlay"></div>
        </div>
        <div className="bottom-elements">
          <div className="Sidebar-Theme">
            <Theme />
          </div>
          <div className="line-break"></div>
          <div className="Sidebar-Avatar" style={{ marginTop: "7px" }}>
            <Avatar />
          </div>
        </div>
      </div>
    );
  };

  const classes = SidebarStyles();
  return <Component />;
}
