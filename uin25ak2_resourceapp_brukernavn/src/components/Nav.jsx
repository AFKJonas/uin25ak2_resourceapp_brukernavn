import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../style/Nav.scss'

export default function Nav() {
    const categories = ["html", "css", "javascript", "react", "headless-cms"];
    const location = useLocation();
    const [active, setActive] = useState(null);

    useEffect(() => {
        const path = location.pathname.substring(1);
        if (categories.includes(path)) {
            setActive(path);
            localStorage.setItem("activeCategory", path);
        }
    }, [location.pathname]);

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
