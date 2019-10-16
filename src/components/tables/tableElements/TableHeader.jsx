import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

function TableHeader(props) {
  const { headCells } = props;

  return (
    <React.Fragment>
      <TableHead>
        <TableRow>
          {headCells.length > 2 && <TableCell></TableCell>}
          {headCells.map(headCell => (
            <TableCell key={headCell.id} align="left" padding="default">
              {headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </React.Fragment>
  );
}

export default TableHeader;
