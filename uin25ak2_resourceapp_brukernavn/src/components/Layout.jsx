import React from 'react';
import Nav from '../components/Nav';



export default function Layout({ children, setCategory }) {
    return (
        <>
        <header>
            <Nav setCategory={setCategory} />    
        </header>
            <main>
                { children }   
            </main>
        </>
    );
}


