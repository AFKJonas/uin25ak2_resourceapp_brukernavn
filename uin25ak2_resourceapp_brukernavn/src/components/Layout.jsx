import React from 'react';
import Nav from '../components/Nav';


export default function Layout({ children }) {
    return (
        <>
        <header>
            <nav> 
                {/* Linker Nav her siden det er her knappene kommer inn */}
                <Nav /> 
            </nav>   
        </header>
            <main>
                { children }   
            </main>
        </>
    );
}


