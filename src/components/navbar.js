function Navbar() {
  return (
    <div className="Navbar">
      {/* navbar */}

      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="font-monospace border-primary border-2 ml-6 p-1">
            melodyBee
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="btn mr-1 bg-primary rounded-none">Item 1</a>
            </li>
            <li>
              <a className="btn-square btn mr-1">Item 2</a>
            </li>
            <li>
              <a className="btn">Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
