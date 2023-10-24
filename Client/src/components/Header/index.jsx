import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import './index.css'
const styles = ({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" });

const Header = () => {
  return (
    <>
            <header>
                <NavLink id="nav-title" to="/">
                    Robbie Stamp
                </NavLink>
                <nav>
                    <NavLink to="/" style={styles}>
                        About
                    </NavLink>
                    <NavLink to="/experience" style={styles}>
                        Experience
                    </NavLink>
                </nav>
            </header>
            <Outlet />
        </>
  )
}

export default Header
