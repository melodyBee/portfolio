import { useState } from "react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("Desktop");

  const navItems = ["Desktop", "Projects", "Articles", "Contact"];

  return (
    <div className="Navbar">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a
            className="border-2 ml-6 p-1 px-3 border-accent font-headline"
            href="../App.js"
          >
            melodyBee
          </a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  className={`btn mr-1 rounded-none ${
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
      </div>
    </div>
  );
}

export default Navbar;
