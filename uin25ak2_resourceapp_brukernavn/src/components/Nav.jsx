import React from 'react';

export default function Nav({ setCategory }) {
    const categories = ["html", "css", "javascript", "react", "sanity"];

    return (
       <nav>
        <h2>Kategorier</h2>
        {categories.map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)}>
                {cat.toUpperCase()} 
            </button>
        ))}
       </nav>
    );


}
