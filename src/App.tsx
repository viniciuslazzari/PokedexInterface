import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import "./app.css"
import NewPokemon from "./pages/NewPokemon";

function App() {
  return (
    <>
      <TopBar />
      <div id="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewPokemon />} />
        </Routes>
      </div>'
    </>
  );
}

export default App;