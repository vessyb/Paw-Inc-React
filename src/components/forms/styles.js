import { makeStyles } from "@material-ui/styles";

export const FormStyles = makeStyles(theme => ({
  formEl: {
    margin: "8px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "20rem",
    height: "15rem"
  },
  button: {
    marginTop: "30px"
  }
}));
