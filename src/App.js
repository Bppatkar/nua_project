import React from "react";
import Home from "./pages/Home";
import List from "./pages/List";
import Single from "./pages/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
