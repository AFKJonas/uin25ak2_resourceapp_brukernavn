import React from 'react';
import Nav from '../components/Nav';



export default function Layout({ children, setCategory }) {
    return (
        <>
        <header>
            <nav> 
                <Nav setCategory={setCategory} /> 
            </nav>   
        </header>
            <main>
                { children }   
            </main>
        </>
    );
}


