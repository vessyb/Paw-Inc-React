import React from "react";
import NavBar from "./NavBar";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { HeaderStyles } from "./styles";

function Header() {
  const classes = HeaderStyles();
  return (
    //you need position sticky

    // <header style={headerStyle}>
    //   <NavBar/>
    //   <h1 style={headingStyle}>Paw Inc.</h1>
    // </header>
    <AppBar position="sticky">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <h1>Paw Inc</h1>
        <Typography variant="h6" noWrap>
          <nav>
            <List style={{ display: "flex" }}>
              {["Home", "Centers", "Animals", "About"].map((text, index) => (
                <Link className={classes.links} key={text} to={`/${text.toLowerCase()}`}>
                  <ListItem button>
                    <ListItemText primary={text} />
                    <Divider />
                  </ListItem>
                </Link>
              ))}
            </List>
          </nav>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

// const headerStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-start",
//   flexDirection: "row",
//   background: "#455A64",
//   color: "white",
//   padding: "10px",
//   textAlign: "center"
// };

// const headingStyle = {
//   marginLeft: "40%"
// };

export default Header;
