import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

export default function NavBar() {

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Home", "Centers", "Animals", "About"].map((text, index) => (
            <Link key={text} to={`/${text.toLowerCase()}`}>
                 <ListItem button >
                 <ListItemText primary={text} />
                 <Divider />
                 </ListItem>
            </Link>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>Open Menu</Button>
        <Drawer
          open={state.left}
          onClose={toggleDrawer("left", false)}
          className={classes.list}
        >
          {sideList("left")}
        </Drawer>
    </React.Fragment>
  );
}

const useStyles = makeStyles({
  list: {
    width: 250,
    color: "#fff",
    height: "100%",
    backgroundColor: "#455A64"
  }
});
