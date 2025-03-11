import { Link } from "react-router-dom";

export default function Nav() {
    const categories = ["html", "css", "javascript", "react", "headless-cms"];

    return (
        <>
            {categories.map((cat) => (
                <Link to={`/${cat}`} key={cat}>
                    <button className="NavButtons">{cat}</button>
                </Link>
            ))}
        </>
    );
}
