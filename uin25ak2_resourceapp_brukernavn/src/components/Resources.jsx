import React from 'react';
import { resources } from '../resources/ressurser';
import PageTitle from './PageTitle';

export default function Resources({ category }) {
    const filteredResources = resources.filter(resource => resource.category === category);

    return (
        <>
        <PageTitle category={category}/>
            <ul>
                {filteredResources.map((resource) => (
                    <li key={resource.id || resource.title}>
                        <a href={resource.url} target="_blank">{resource.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}
