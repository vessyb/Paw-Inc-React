import React from "react";
import { BodyStyles } from "./styles";

export default function About() {
  const classes = BodyStyles();

  return (
    <div className={classes.heading}>
      <p>This is the Paw Inc. app v1.0.0</p>
    </div>
  );
}
