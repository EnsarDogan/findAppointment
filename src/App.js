import React from "react";
import { CssBaseline } from "@material-ui/core";
import FormComponent from "./Form";
import HeaderComponent from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div style={{ padding: 16, marginTop: 30, margin: "auto", maxWidth: 600 }}>
      <CssBaseline />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <HeaderComponent />
      <FormComponent />
    </div>
  );
}

export default App;
