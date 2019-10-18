import React from "react";
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
    <AppBar position="sticky">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <h1>Paw Inc</h1>
        <Typography variant="h6" noWrap>
          <nav>
            <List style={{ display: "flex" }}>
              {["Home", "Centers", "Animals", "About"].map((text, index) => (
                <Link
                  className={classes.links}
                  key={text}
                  to={`/${text.toLowerCase()}`}
                >
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

export default Header;
