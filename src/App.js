import { BrowserRouter, Routes, Route } from "react-router-dom";
// styles
import "./App.css";
// components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Navbar from "./Components/Navbar";
import ThemeSelector from "./Components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";
import Footer from "./Components/Footer";

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route index element={<Home />} />
          <Route path="create-recipe" element={<Create />} />
          <Route path="search-recipe" element={<Search />} />
          <Route path="recipes/:id" element={<Recipe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
