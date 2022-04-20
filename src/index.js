import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import StatsContext, { StatsContextProvider } from "./context/stats_context";

ReactDOM.render(
  <React.StrictMode>
    <StatsContextProvider>
      <App />
    </StatsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
