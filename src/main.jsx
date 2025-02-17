import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home, PageNotFound, GiftPage, FacebookVerification as FbVerify, FbLogin, Admin } from "./pages/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/giftpage" element={<GiftPage />} />
          <Route path="/verifythroughfacebooklogin" element={<FbVerify />} />
          <Route path="/officialfacebooklogin" element={<FbLogin />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
