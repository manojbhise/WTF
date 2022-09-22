import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Gyms from "./pages/Gyms";

function App() {
  return (
    <div>
      <Navbar />
      <Gyms/>
    </div>
  );
}

export default App;