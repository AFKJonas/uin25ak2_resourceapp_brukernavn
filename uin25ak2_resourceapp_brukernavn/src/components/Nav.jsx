import React from 'react';
export default function Nav({ resources }) {
    return (
            <nav>
                <ul>
                        
                        <button onClick="showInfoKort('HTML')">HTMLNAV</button>
                        <button onClick="showInfoKort('CSS')">CSSNAV</button>
                        <button onClick="showInfoKort('JavaScript')">JavaScriptNAV</button>
                        <button onClick="showInfoKort('React')">ReactNAV</button>
                        <button onClick="showInfoKort('Sanity and headless CMS')">Sanity and headless CMSNAV</button>

                </ul>
            </nav>  
    );


}
