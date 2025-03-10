import { Link } from "react-router-dom";

export default function Nav() {
    const categories = ["html", "css", "javascript", "react", "headless-cms"];

    return (
        <nav>
            {categories.map((cat) => (
                    <Link key={cat} to={`/${cat}`} className="NavButtons">{cat}</Link> // Direkte kopiert fra ChatGPT
            ))}
        </nav>
    );
}
