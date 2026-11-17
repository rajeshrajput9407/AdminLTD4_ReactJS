function Header() {
    return (
        <nav className="app-header navbar navbar-expand bg-body">

            <div className="container-fluid">

                <ul className="navbar-nav">

                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-lte-toggle="sidebar"
                            href="#"
                            role="button"
                            aria-label="Toggle sidebar"
                        >
                            <i className="bi bi-list"></i>
                        </a>
                    </li>

                    <li className="nav-item d-none d-md-block">
                        <a href="/dashboard" className="nav-link">
                            Home
                        </a>
                    </li>

                    <li className="nav-item d-none d-md-block">
                        <a href="/settings" className="nav-link">
                            Settings
                        </a>
                    </li>

                </ul>

                <ul className="navbar-nav ms-auto">

                    <li className="nav-item dropdown">

                        <a
                            className="nav-link"
                            data-bs-toggle="dropdown"
                            href="#"
                        >
                            <i className="bi bi-person-circle me-1"></i>
                            Admin
                        </a>

                        <div className="dropdown-menu dropdown-menu-end">

                            <a href="/settings" className="dropdown-item">
                                <i className="bi bi-gear me-2"></i>
                                Settings
                            </a>

                            <div className="dropdown-divider"></div>

                            <button className="dropdown-item">
                                <i className="bi bi-box-arrow-right me-2"></i>
                                Logout
                            </button>

                        </div>

                    </li>

                </ul>

            </div>
        </nav>
    );
}

export default Header;