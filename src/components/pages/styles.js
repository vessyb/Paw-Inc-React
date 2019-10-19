import { makeStyles } from "@material-ui/styles";

export const BodyStyles = makeStyles(theme => ({
  buttonDiv: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content"
  },
  mainElements: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    margin: "50px",
    backgroundColor: theme.palette.primary.main
  },
  heading: {
    textAlign: "center"
  }
}));
