import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <header style={headerStyle}>
      <NavBar/>
      <h1 style={headingStyle}>Paw Inc.</h1>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  background: "#455A64",
  color: "white",
  padding: "10px",
  textAlign: "center"
};

const headingStyle = {
  marginLeft: "40%"
};

export default Header;
