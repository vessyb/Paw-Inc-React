import React, { useState } from "react";
import TextInput from "./formElements/TextInput/TextInput";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { MenuItem } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { FormStyles } from "./styles"

function AnimalForm(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [centerName, setCenterName] = useState("");
  const classes = FormStyles();

  const { cleansingCenters } = props;

  const handleNameInputChange = e => {
    setName(e.target.value);
  };

  const handleTypeInputChange = e => {
    setType(e.target.value);
  };

  const handleCenterNameInputChange = e => {
    setCenterName(e.target.value);
  };

  const resetState = () => {
    setName("");
    setType("");
    setCenterName("");
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:8080/animals",
        {
          name: name,
          type: type,
          centerName: centerName
        },
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response);
      });

    resetState();
  };

  return (
      <form className={classes.form}>
          <TextInput className={classes.formEl} handleNameInputChange={handleNameInputChange} />
          <Select
            id="type"
            value={type}
            displayEmpty={true}
            onChange={handleTypeInputChange}
            fullWidth
            className={classes.formEl} 
          >
            <MenuItem value="dog">Dog</MenuItem>
            <MenuItem value="cat">Cat</MenuItem>
          </Select>
          <Select
            id="centerName"
            value={centerName}
            displayEmpty={true}
            onChange={handleCenterNameInputChange}
            fullWidth
            className={classes.formEl} 
          >
            {cleansingCenters.map(center => (
              <MenuItem key={center.name} value={center.name}>
                {center.name}
              </MenuItem>
            ))}
          </Select>
          <Button variant="outlined" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
      </form>
  );
}

export default AnimalForm;
