import React, { useState } from "react";
import TextInput from "./formElements/TextInput/TextInput";
import CustomDialog from "../Dialog/CustomDialog";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function CenterForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleNameInputChange = e => {
    setName(e.target.value);
  };

  const handleTypeInputChange = e => {
    setType(e.target.value);
  };

  const resetState = () => {
    setName("");
    setType("");
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:8080/centers",
        {
          name: name,
          type: type
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
    <CustomDialog>
      <form>
        <TextInput handleNameInputChange={handleNameInputChange} />

        <Select
          id="type"
          value={type}
          displayEmpty={true}
          onChange={handleTypeInputChange}
        >
          <MenuItem value="cleansing">Cleansing</MenuItem>
          <MenuItem value="adoption">Adoption</MenuItem>>
        </Select>

        <Button variant="outlined" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </CustomDialog>
  );
}

export default CenterForm;
