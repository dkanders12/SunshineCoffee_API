import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import ProductList from "./Components/Fetching/Fetch";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop/Shop";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
