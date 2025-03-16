import React from 'react';
import { resources } from '../resources/ressurser';
import PageTitle from './PageTitle';

export default function Resources({ category }) {
    //Filtrerer ressursene basert på hvilken kategori som er valgt
    const filteredResources = resources.filter(resource => resource.category === category);

    return (
        <>
        <article>
            {/* PageTitle her, fordi det er her pageTitle viser den valgte kategorien */}
            <PageTitle category={category}/>
                <ul>
                    {/* bruker.map for å gå igjennom arrayet og henter ut riktig innhold til valgte kategori
                     + lager <li> for hver ressurs*/}
                    {filteredResources.map((resource) => (
                        //Her får hvert <li> en key som er id, hvis ikke det funker med id, bruker den heller(fallback) title, 
                        // for React krever at hvert element i en liste har en unik key
                        <li key={resource.id || resource.title}>
                            {/* <a> tagg her, for de ulike linkene, resource.url for å hente ut URL'ene til ressursene og 
                             resource.title for å hente ut tittelen på de, target="_blank" for å åpne linkene i ny fane*/}
                            <a href={resource.url} target="_blank">{resource.title}</a>
                        </li>
                    ))}
                </ul>
        </article>
        </>
    );
}