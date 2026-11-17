import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside
            className="app-sidebar bg-dark shadow"
            data-bs-theme="dark"
        >

            <div className="sidebar-brand">
                <a href="/dashboard" className="brand-link">
                    <span className="brand-text fw-light">
                        My Admin Panel
                    </span>
                </a>
            </div>

            <div className="sidebar-wrapper">

                <nav className="mt-2">

                    <ul
                        className="nav sidebar-menu flex-column"
                        role="menu"
                    >

                        <li className="nav-item">

                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                <i className="nav-icon bi bi-speedometer2"></i>
                                <p>Dashboard</p>
                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                to="/users"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                <i className="nav-icon bi bi-people"></i>
                                <p>Users</p>
                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                to="/settings"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                <i className="nav-icon bi bi-gear"></i>
                                <p>Settings</p>
                            </NavLink>

                        </li>

                    </ul>

                </nav>

            </div>
        </aside>
    );
}

export default Sidebar;