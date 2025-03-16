import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../style/Nav.scss'

export default function Nav() {
    //Const for å lagre kategoriene som en ny array, for å kunne bruke de i NavButtons
    const categories = ["html", "css", "javascript", "react", "headless-cms"];
    //Const for å hente ut pathen til siden brukeren er direkte/Live på, 
    // for å kunne sette opp riktig kategori som aktiv
    const location = useLocation();
    //useState for å lagre hvilken kategori som er aktiv(er den aktiv, da endrer den utseendet til aktiv)
    // , den begynner med html som default, for å vise innholdet til html når siden lastes ved første gang "/"
    const [active, setActive] = useState("html");


    //useEffect kjøres hver gang location.pathname endrer seg, altså når URL'en endrer seg
    //funksjonen sjekker også om pathen er en av kategoriene, hvis den er det så setter den den kategorien som aktiv,
    // og lagrer den i localStorage, slik at den husker hvilken kategori som var aktiv, selv når siden lastes på nytt
    useEffect(() => {
        const path = location.pathname.substring(1);
        if (categories.includes(path)) {
            setActive(path);
            localStorage.setItem("activeCategory", path);
        }
    }, [location.pathname]);

    //Denne funksjonen kjøres når en knapp trykkes på, og setter den kategorien som aktiv
    const handleSetActive = (cat) => {
        setActive(cat);
        localStorage.setItem("activeCategory", cat);
    };


    //Returnerer knappene for hver kategori som er lagret i categories-arrayet.
    return (
        <>
        {/* Når en knapp blir trykket på kjøres funksjonen handleSetActive(cat). 
        .map går igjennom arrayet og genererer en link-komponent for hver kategori, 
        slik at hver kategori blir vist som en knapp på siden, og hvis kategorien er aktiv, 
        så legger den til "active" i className, slik at knappen får en annen farge*/}
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