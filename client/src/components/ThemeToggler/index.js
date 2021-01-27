import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./ThemeToggler.scss";

const ThemeToggler = ({ onChangeTheme }) => {
    return (
        <div className="theme-toggler">
            <input
                type="checkbox"
                className="checkbox"
                id="chk"
                onClick={onChangeTheme}
            />
            <label className="label" htmlFor="chk">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <div className="ball"></div>
            </label>
        </div>
    );
};

export default ThemeToggler;
