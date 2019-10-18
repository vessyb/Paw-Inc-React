import React from "react";
import { BodyStyles } from "./styles";

export default function Home() {
  const classes = BodyStyles();

  return (
    <div className={classes.heading}>
      <h1>Welcome to Paw Inc. :)</h1>
    </div>
  );
}
