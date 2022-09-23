import logo from "./logo.svg";
import "./App.css";
import Gyms from "./pages/Gyms";
import Membership from "./pages/Membership";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Gyms />}/>
        <Route path="membership" element={<Membership />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;