    showInfoKort('HTML');
    changeBackgroundButtons('htmlKnapp');
   console.log(resources);
   
   let resourcesHTML = "";
   
   resources.map((resource, index) => resourcesHTML += `<article>
           <h2>${resource.category}</h2>
           <p>${resource.text}</p>
           <nav>
               <ul>
               <!--lager en .map() for å hente ut data fra arrayet "sources" på innsiden av arrayet "resources", og legger dataen(title og url) fra sources inn i HTML-koden:-->
                   ${resource.sources.map((source, index) => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
               </ul>
           </nav>
       </article>`);
          
       function showInfoKort(category) {
           const infoSide = document.getElementById("infoSide");
           const filteredResources = resources.filter(resource => resource.category === category);
           const filteredHTML = filteredResources.map(resource => `
               <article>
                   <h2>${resource.category}</h2>
                   <p>${resource.text}</p>
                   <nav>
                       <ul>
                           ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
                       </ul>
                   </nav>
               </article>
           `).join('');
       
           infoSide.innerHTML = filteredHTML;  
       }

   function changeBackgroundButtons(activeKnappId) {
       document.querySelectorAll(".knapp").forEach(knapp => {
           knapp.style.backgroundColor = ""; 
           knapp.style.color = ""; 
       });
       
       document.getElementById(activeKnappId).style.backgroundColor = "#fff";
       document.getElementById(activeKnappId).style.color = "#000";
   }
   
   document.getElementById("htmlKnapp").addEventListener("click", () => {
       showInfoKort('HTML');
       changeBackgroundButtons('htmlKnapp');
   });
   document.getElementById("cssKnapp").addEventListener("click", () => {
       showInfoKort('CSS');
       changeBackgroundButtons('cssKnapp');
   });
   document.getElementById("jsKnapp").addEventListener("click", () => {
       showInfoKort('JavaScript');
       changeBackgroundButtons('jsKnapp');
   });
   document.getElementById("reactKnapp").addEventListener("click", () => {
       showInfoKort('React');
       changeBackgroundButtons('reactKnapp');
   });
   document.getElementById("sanityKnapp").addEventListener("click", () => {
       showInfoKort('Sanity and headless CMS');
       changeBackgroundButtons('sanityKnapp');
   });