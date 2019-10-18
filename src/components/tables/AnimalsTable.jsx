import React from "react";
import TableHeader from "./tableElements/TableHeader";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox
} from "@material-ui/core";
import { TableStyles } from "./styles";

function AnimalsTable(props) {
  const { animals, headCells, onCheckboxClick } = props;
  const classes = TableStyles();

  const handleClick = (event, elem) => {
    onCheckboxClick(event, elem);
  };

  return (
    <div className={classes.tableDiv}>
      <Table size="medium" className={classes.table}>
        <TableHeader headCells={headCells} rowCount={animals.length} />
        <TableBody>
          {animals.map(animal => {
            return (
              <TableRow hover role="checkbox" key={animal.animalId}>
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
                  {animal.status}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default AnimalsTable;
