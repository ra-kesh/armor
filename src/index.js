import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  AuthProvider,
  CartProvider,
  ControlProvider,
  ProductProvider,
  WishListProvider,
} from "./context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ControlProvider>
          <ProductProvider>
            <CartProvider>
              <WishListProvider>
                <App />
              </WishListProvider>
            </CartProvider>
          </ProductProvider>
        </ControlProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
