import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar/Navbar";
import Products from "./Components/Home/Products/Products";
import Orders from "./Components/Home/Orders/Orders";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/order/:id" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
