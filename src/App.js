import { BrowserRouter, Routes, Route } from "react-router-dom";
// styles
import "./App.css";
// components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="create-recipe" element={<Create />} />
          <Route path="search-recipe" element={<Search />} />
          <Route path="recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
