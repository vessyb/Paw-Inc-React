import React from "react";
import Header from "./components/layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme/theme";

import RouteSwitch from "./routes/RouteSwitch";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
          <div className="container">
            <Router>
              <Header />
              <RouteSwitch />
            </Router>
          </div>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
