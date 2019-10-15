import React, { useEffect, useState } from 'react'
import CenterForm from "../forms/CenterForm";
import axios from 'axios';

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
            <CenterForm />
        </React.Fragment>
    )
}
