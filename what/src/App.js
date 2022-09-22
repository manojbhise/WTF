import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Gyms from "./pages/Gyms";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Gyms/>
      <Footer/>
    </div>
  );
}

export default App;