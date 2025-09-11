import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Login from "./page/Login";
// import CarDetail from "./page/CarDetail";
import InforCar from "./components/car/InforCar";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/car/:id" element={<InforCar />} />{" "}
    </Routes>
  );
}

export default App;
