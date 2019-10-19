import { makeStyles } from "@material-ui/styles";

export const TableElementStyles = makeStyles(theme => ({
  tableHeader: {
    fontWeight: "bolder",
    fontSize: "1rem"
  }
}));

export const TableStyles = makeStyles(theme => ({
  tableDiv: {
    tableLayout: "fixed",
    width: "70%",
    borderCollapse: "collapse",
    margin: "50px auto"
  },
  table: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflowX: "unset",
    fontVariant: "all-small-caps",
    fontSize: "initial",
    "& tr th": {
      padding: "16px"
    }
  }
}));
