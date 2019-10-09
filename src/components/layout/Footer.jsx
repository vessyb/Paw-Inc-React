import React from "react";

export default function Footer() {
  return (
    <div>
      <footer style={footerStyle}>&copy;2019 Paw Inc.</footer>
    </div>
  );
}

const footerStyle = {
  position: "absolute",
  left: "0",
  bottom: "0",
  right: "0"
};
