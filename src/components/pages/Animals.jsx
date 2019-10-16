import React, { useEffect, useState } from "react";
import AnimalForm from "../forms/AnimalForm";
import AnimalsTable from "../tables/AnimalsTable";
import axios from "axios";
import { Button } from "@material-ui/core";

const headCells = [
  { id: "name", disablePadding: true, label: "Name" },
  { id: "type", disablePadding: true, label: "Type" },
  { id: "centerName", disablePadding: true, label: "Center" },
  { id: "status", disablePadding: true, label: "Status" }
];

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [cleansingCenters, setCleansingCenters] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/centers").then(response => {
      setCleansingCenters(
        response.data.filter(
          center => center.type.toLowerCase() === "cleansing"
        )
      );
    });
  }, []);

  const handleCheckboxClick = (event, animal) => {
    let temp = selected;
    animal.checked = !animal.checked;
    if (animal.checked === false) {
      temp.filter(elem => elem !== animal);
      setSelected(temp);
    } else {
      temp.push(animal);
      setSelected(temp);
    }
  };

  const sendForCleansing = () => {
    // console.log(selected);
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
          console.log(res);
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
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    });
  };

  return (
    <React.Fragment>
      <AnimalsTable
        animals={animals}
        headCells={headCells}
        onCheckboxClick={handleCheckboxClick}
      />
      <AnimalForm cleansingCenters={cleansingCenters} />
      <Button variant="outlined" onClick={sendForCleansing}>
        Cleanse
      </Button>
      <Button variant="outlined" onClick={sendForAdoption}>
        Adopt
      </Button>
    </React.Fragment>
  );
}

export default Animals;
