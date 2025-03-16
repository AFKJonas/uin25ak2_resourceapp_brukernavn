import React from 'react';
// Importerer category fra Resources.jsx, slik at h1 viser den rette kategorien til innholdet
//  når brukeren trykker på den valgte knappen i Nav.jsx, 
// bruker også .toUpperCase() slik at category er i store bokstaver
export default function PageTitle({ category }){
    return (
        <h1>Ressurser for {category.toUpperCase()}</h1>
        
    )
    
}