import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider, ControlProvider, ProductProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import { UserDataProvider } from "./context/userData-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserDataProvider>
          <ControlProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </ControlProvider>
        </UserDataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
