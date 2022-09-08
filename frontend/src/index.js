import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import EditPage from "./pages/EditPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
);
