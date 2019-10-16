import React from "react";
import TableHeader from "./tableElements/TableHeader";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";

function CentersTable(props) {
  const { centers, headCells } = props;
  return (
    <React.Fragment>
      <Table size="medium">
        <TableHeader headCells={headCells} rowCount={centers.length} />
        <TableBody>
          {centers.map((center, index) => {
            return (
              <TableRow hover tabIndex={-1} key={center.id}>
                <TableCell component="th" id={index} scope="row" padding="none">
                  {center.name}
                </TableCell>
                <TableCell align="left">{center.type}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default CentersTable;
