import React from "react";
import TableHeader from "./tableElements/TableHeader";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { TableStyles } from "./styles";

function CentersTable(props) {
  const { centers, headCells } = props;
  const classes = TableStyles();

  return (
    <div className={classes.tableDiv}>
      <Table size="medium" className={classes.table}>
        <TableHeader headCells={headCells} rowCount={centers.length} />
        <TableBody>
          {centers.map((center) => {
            return (
              <TableRow hover key={center.id}>
                <TableCell component="th" scope="row" padding="none">
                  {center.name}
                </TableCell>
                <TableCell align="left">{center.type}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default CentersTable;
