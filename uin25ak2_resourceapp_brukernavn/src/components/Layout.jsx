import React from 'react';
import { resources } from '../resources/ressurser.js';
export default function Layout() {
    return (
        <>
<header>
    
    <nav>
        <button onClick="showInfoKort('HTML')">HTML</button>
        <button onClick="showInfoKort('CSS')">CSS</button>
        <button onClick="showInfoKort('JavaScript')">JavaScript</button>
        <button onClick="showInfoKort('React')">React</button>
        <button onClick="showInfoKort('Sanity and headless CMS')">Sanity and headless CMS</button>
    </nav>
    
</header>

<main>
    <article>
        <h2>{}</h2>
        <p>{}</p>
        <nav>
            <ul>
                <li><a href={resources.url}>{resources.url}</a></li>
                <li><a href={resources.url}>{resources.url}</a></li>
                <li><a href={resources.url}>{resources.url}</a></li>
            </ul>
        </nav>
    </article>
</main>

<footer></footer>
</>

    );
}


