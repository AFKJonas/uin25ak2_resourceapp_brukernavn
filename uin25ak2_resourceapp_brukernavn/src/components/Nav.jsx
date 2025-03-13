import React, { useState } from "react";
import { Link } from "react-router-dom";
import"../Style/Nav.scss"; 
export default function Nav() {
    const categories = ["html", "css", "javascript", "react", "headless-cms"];
    
    const [active, setActive] = useState(() => localStorage.getItem("activeCategory") || null);

    const handleSetActive = (cat) => {
        setActive(cat);
        localStorage.setItem("activeCategory", cat);
    };

    return (
        <>
            {categories.map((cat) => (
                <Link to={`/${cat}`} key={cat}>
                    <button 
                        onClick={() => handleSetActive(cat)} 
                        className={`NavButtons ${active === cat ? "active" : ""}`}>{cat}
                    </button>
                </Link>
            ))}
        </>
    );
}