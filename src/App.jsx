import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Login from "./page/Login";
import About from "./page/About";
import Vehicles from "./page/Vehicles";
import InforCar from "./components/car/InforCar";
import Contact from "./page/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/vehicles" element={<Vehicles />}></Route>
      <Route path="/car/:id" element={<InforCar />} />
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default App;