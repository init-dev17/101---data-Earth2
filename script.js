
// https://earth2.io/robots.txt


// _______________________________________________________________
// Web scraping

let pageWeb = new XMLHttpRequest();
pageWeb.open("GET", "https://earth2.io/activities");

console.log(pageWeb);

// document.getElementById("la-div").appendChild(document.createTextNode(this.responseText));



document.querySelector(`.GenericHero_heroContentTitle__3XS3D`).innerText



// Total Tier 1 Jewels Mined
// Récupérer le 
// document.querySelector(`.MetricsActivityItem_metricsActivityItemNumberText__1tGn2`).innerText
// document.querySelector(`.MetricsActivityItem_metricsActivityItemNumberText__1tGn2`).textContent
// Après Total Tier 1 Jewels Mined dans MetricsActivityItem_metricsActivityItemTitle__1GaJn
// https://www.freecodecamp.org/news/innerhtml-vs-innertext-vs-textcontent/



// Boucle sur class MetricsActivityItem_metricsActivityItemTitle__1GaJn
document.querySelector(`.MetricsActivityItem_metricsActivityItemTitle__1GaJn`).innerText
// Lire chaque texte dans la classe .MetricsActivityItem_metricsActivityItemNumberText__1tGn2 qui suit et associer les 2 résultats
document.querySelector(`.MetricsActivityItem_metricsActivityItemNumberText__1tGn2`).innerText




// _______________________________________________________________
// Récupération des données

let list_name = document.querySelectorAll(`.MetricsActivityItem_metricsActivityItemTitle__1GaJn`); 
let list_number = document.querySelectorAll(`.MetricsActivityItem_metricsActivityItemNumberText__1tGn2`);
for (let i = 0; i < list_name.length; i++) { console.log(list_name[i].innerText); console.log(list_number[i].innerText); }

for (let stats of list_name) {

}



// _______________________________________________________________
// stockage données (clé/valeur)
// https://code-garage.fr/blog/comment-utiliser-le-localstorage-pour-stocker-des-donnees-en-local-sur-le-navigateur/

// Manipulation données
// https://dev.to/christopher2k/manipulation-de-tableaux-avec-js-2na7


// Max Supply (minus burnt tokens)
// Minted Tokens
// Burnt Tokens
// E-ther Collected past 24 hours
// No. of Cydroids
// No. of Civilians
// No. of Raid Commanders
// No. of E-ther Reckoners
// No. of Cydroid Technicians
// No. of Geologists




let donnees = [];
donnees.push({date:"1er janvier",Jewels:"1000000",Tokens:"2000000", Cydroids:"3000000"})

