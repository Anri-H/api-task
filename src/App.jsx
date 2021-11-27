import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import Cats from "./components/Cats/Cats";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories />}>
            <Route index element={<Cats />} />
            <Route path="categories/:id" element={<Cats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
