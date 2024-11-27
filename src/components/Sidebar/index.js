import React from "react";
import "./index.css";

const Sidebar = () => {
    return (
        <div className="sidebar m-4 p-3">
            <h2>Name</h2>
            <p>role</p>
            <div className="menu-list">
                <div className="menu-items">
                    <span to="/projects">Projects</span>
                </div>
                <div className="menu-items">
                    <span to="/employees">Employees</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
