import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-light mb-2">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        PuppyPrep
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/quizzes" className="nav-link">
                                    Quizzes
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/adopt" className="nav-link">
                                    Adopt
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}