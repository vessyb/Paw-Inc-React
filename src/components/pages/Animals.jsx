import React, { useEffect, useState } from "react";
import AnimalForm from "../forms/AnimalForm";
import axios from "axios";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [cleansingCenters, setCleansingCenters] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/animals").then(response => {
      setAnimals(response.data);
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

  return (
    <React.Fragment>
      <AnimalForm cleansingCenters={cleansingCenters}/>
    </React.Fragment>
  );
}

export default Animals;
