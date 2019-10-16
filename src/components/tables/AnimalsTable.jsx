import React, { useState } from "react";
import TableHeader from "./tableElements/TableHeader";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox
} from "@material-ui/core";

function AnimalsTable(props) {
  const { animals, headCells, onCheckboxClick } = props;

  const handleClick = (event, elem) => {
    onCheckboxClick(event, elem);
  };

  return (
    <React.Fragment>
      <Table size="medium">
        <TableHeader headCells={headCells}  rowCount={animals.length} />
        <TableBody>
          {animals.map(animal => {
            return (
              <TableRow hover role="checkbox" key={animal.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    onChange={event => handleClick(event, animal)}
                  ></Checkbox>
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                  {animal.name}
                </TableCell>
                <TableCell align="left">{animal.type}</TableCell>
                <TableCell align="left">{animal.center}</TableCell>
                <TableCell align="left">
                  {animal.status.toLowerCase()}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default AnimalsTable;
