import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import ContextProvider from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </ContextProvider>
);
