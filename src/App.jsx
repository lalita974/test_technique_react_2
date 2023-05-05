import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import Types from "./pages/Types";
import Pokemon from "./pages/Pokemon";
import Type from "./pages/Type";

//Components
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemons />} />
        <Route path="/type" element={<Types />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/type/:id" element={<Type />} />
      </Routes>
    </Router>
  );
};

export default App;
