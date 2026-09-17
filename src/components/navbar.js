function Navbar() {
    return (
        <div className="Navbar">
            {/* navbar */}

            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="font-monospace border-primary border-2 ml-6 p-1" href="../App.js">
                        melodyBee
                    </a>
                </div>
                <div className="navbar-start">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a className="btn mr-1 bg-primary rounded-none" href="../App.js">
                                Desktop
                            </a>
                        </li>
                        <li>
                            <a className="btn btn mr-1" href="../App.js">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a className="btn" href="../App.js">
                                Articles
                            </a>
                        </li>
                        <li>
                            <a className="btn" href="../App.js">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
