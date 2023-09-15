import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import { UserDataProvider } from "./context/userData-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <UserDataProvider>
            <App />
          </UserDataProvider>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
