import "./App.css";
import Navbar from "./components/navbar.js";
import Welcome from "./components/welcome.js";
function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      {/* intro to me */}
      <Welcome />
    </div>
  );
}

export default App;
