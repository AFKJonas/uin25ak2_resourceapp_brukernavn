import { Link } from "react-router-dom";

export default function Nav() {
    const categories = ["html", "css", "javascript", "react", "headless-cms"];

    return (
        <nav>
            <h2>Kategorier</h2>
            {categories.map((cat) => (
                <button key={cat}>
                    {/* Direkte kopiert fra ChatGPT: */}
                    <Link to={`/${cat}`}>{cat.toUpperCase()}</Link> 
                </button>
            ))}
        </nav>
    );
}
