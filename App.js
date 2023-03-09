import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Techstack from "./components/Techstack/Techstack";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Homepage />
      <Techstack />
    </div>
  );
}

export default App;
