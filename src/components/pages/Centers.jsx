import React, { useEffect, useState } from 'react'
import CenterForm from "../forms/CenterForm";
import axios from 'axios';
import CentersTable from '../tables/CentersTable';

const headCells = [
    { id: "name",  disablePadding: true, label: "Name" },
    { id: "type",  disablePadding: true, label: "Type"}
]

export default function Centers() {
    const [centers, setCenters] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/centers")
        .then(response => {
            setCenters(response.data);
            console.log(centers);
          })
    }, [])

    return (
        <React.Fragment>
            <CentersTable centers={centers} headCells={headCells}/>
            <CenterForm />
        </React.Fragment>
    )
}
