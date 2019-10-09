import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
    button: {
        margin: 50,
        padding: 10,
        width: 100,
        fontSize: 20
    }
}));

export default function CustomButton({ buttonColor, direction, buttonName}) {

    let classes = styles()
  return (
    <Button
      variant="contained"
      color={buttonColor}
      className={classes.button}
      onClick={direction}
    >
        {buttonName}
    </Button>
  );
}

// export default withStyles(styles)(CustomButton);
