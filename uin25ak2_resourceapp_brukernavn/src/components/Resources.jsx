import React from 'react';
import { resources } from '../resources/ressurser';
import Layout from './Layout';


export default function Resources({ category }) {

    const filteredResources = resources.filter(resource => resource.category === category);
    return (
        <>
         <h2>Ressurser for {category.toUpperCase()}</h2>
            <ul>
                {filteredResources.map((resource) => (
                    <li key={resource.id}>
                        <Layout>
                            <a href={resource.url} target="_blank">{resource.title}</a>
                        </Layout>
                    </li>
                ))}
            </ul>
        </>
    );
}