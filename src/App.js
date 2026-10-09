import "./App.css";
import Navbar from "./components/navbar.js";
import Welcome from "./components/welcome.js";
import Projects from "./components/projects.js";
function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />
      {/* intro to me */}
      <Welcome />
      <Projects />
    </div>
  );
}

export default App;
