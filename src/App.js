import React from "react";
import { CssBaseline } from "@material-ui/core";
import FormComponent from "./Form";
import HeaderComponent from "./Header";

function App() {
  return (
    <div style={{ padding: 16, marginTop: 30, margin: "auto", maxWidth: 600 }}>
      <CssBaseline />
      <HeaderComponent />
      <FormComponent />
    </div>
  );
}

export default App;
