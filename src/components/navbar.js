import { useState } from "react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("Desktop");

  const navItems = ["Desktop", "Projects", "Articles", "Contact"];

  return (
    <div className="Navbar border-b-2 border-primary">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a
            className="btn btn-sm rounded-none bg-white border-2 ml-6 p-1 px-3 border-accent font-headline"
            href="../App.js"
          >
            melodyBee
          </a>
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  className={`btn btn-sm mr-1 rounded-none ${
                    activeTab === item ? "bg-primary text-white" : ""
                  }`}
                  href="../App.js"
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-xs rounded-none bg-secondary mr-2">
            SYNTH: ON
          </button>
          <button className="btn btn-xs rounded-none bg-neutral">
            14:32 PST
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
