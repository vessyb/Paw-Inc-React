import React, { useEffect, useState } from "react";
import AnimalForm from "../forms/AnimalForm";
import AnimalsTable from "../tables/AnimalsTable";
import axios from "axios";
import { Button } from "@material-ui/core";
import { BodyStyles } from "./styles";
import CustomDialog from "../Dialog/CustomDialog";

const headCells = [
  { id: "name", disablePadding: true, label: "Name" },
  { id: "type", disablePadding: true, label: "Type" },
  { id: "centerName", disablePadding: true, label: "Center" },
  { id: "status", disablePadding: true, label: "Status" }
];

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [cleansingCenters, setCleansingCenters] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [centerName, setCenterName] = useState("");
  const classes = BodyStyles();

  let selected = [];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          name,
          type,
          centerName
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
        setAnimals([...animals, res.data]);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response);
      });

    resetState();
    handleClose();
  };

  const getAnimals = () => {
    axios.get("http://localhost:8080/animals").then(response => {
      setAnimals(
        response.data.map(animal => {
          let newObj = animal;
          newObj.checked = false;
          return newObj;
        })
      );
      console.log(animals);
    });
  };

  const getCleansingCenters = () => {
    axios.get("http://localhost:8080/centers").then(response => {
      setCleansingCenters(
        response.data.filter(
          center => center.type.toLowerCase() === "cleansing"
        )
      );
    });
  };

  useEffect(() => {
    getAnimals();
    getCleansingCenters();
  }, []);

  const handleCheckboxClick = (event, animal) => {
    animal.checked = !animal.checked;
    if (animal.checked === true) {
      selected.push(animal);
    } else {
      selected = selected.filter(elem => elem.animalId !== animal.animalId);
    }
  };

  const sendForCleansing = () => {
    let animalIds = [];
    selected.forEach(animal => {
      animalIds.push(animal.animalId);
      axios
        .put(
          `http://localhost:8080/animals/cleanse?animalIds=${animalIds}`,
          {
            animalIds: animalIds
          },
          {
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json"
            }
          }
        )
        .then(res => {
          let data = res.data;
          console.log(res);
          let updatedAnimals = animals.map((animal) => {
            let animalIndex = data.findIndex((el) => el.animalId === animal.animalId);
            if(animalIndex > -1) {
              let animalToReturn = data[animalIndex];
              animalToReturn.checked = false;
              return animalToReturn;
            }
            return animal;
          })
          setAnimals([animals, ...updatedAnimals]);
          console.log(res.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    });
  };

  const sendForAdoption = () => {
    let animalIds = [];
    selected.forEach(animal => {
      animalIds.push(animal.animalId);
      axios
        .put(
          `http://localhost:8080/animals/adopt?animalIds=${animalIds}`,
          {
            animalIds: animalIds
          },
          {
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json"
            }
          }
        )
        .then((res) => {
          let data = res.data;
          console.log(res);
          let updatedAnimals = animals.map((animal) => {
            let animalIndex = data.findIndex((el) => el.animalId === animal.animalId);
            if(animalIndex > -1) {
              let animalToReturn = data[animalIndex];
              animalToReturn.checked = false;
              return animalToReturn;
            }
            return animal;
          })
          setAnimals([animals, ...updatedAnimals]);
          console.log(res.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    });
  };

  return (
    <div className={classes.mainElements}>
      <AnimalsTable
        animals={animals}
        headCells={headCells}
        onCheckboxClick={handleCheckboxClick}
        className={classes.body}
      />
      <CustomDialog open={open} handleClose={handleClose}>
        <AnimalForm
          type={type}
          centerName={centerName}
          handleSubmit={handleSubmit}
          handleNameInputChange={handleNameInputChange}
          handleTypeInputChange={handleTypeInputChange}
          handleCenterNameInputChange={handleCenterNameInputChange}
          cleansingCenters={cleansingCenters}
          handleClose={handleClose}
        />
      </CustomDialog>
      <div className={classes.buttonDiv}>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Register
        </Button>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={sendForCleansing}
        >
          Cleanse
        </Button>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={sendForAdoption}
        >
          Adopt
        </Button>
      </div>
    </div>
  );
}

export default Animals;
