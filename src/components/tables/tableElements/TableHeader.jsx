import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";
import { TableElementStyles } from "../styles";

function TableHeader(props) {
  const { headCells } = props;
  const classes = TableElementStyles();

  return (
    <React.Fragment>
      <TableHead>
        <TableRow>
          {headCells.length > 2 && <TableCell></TableCell>}
          {headCells.map(headCell => (
            <TableCell
              className={classes.tableHeader}
              key={headCell.id}
              align="left"
              padding="default"
            >
              {headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </React.Fragment>
  );
}

export default TableHeader;
