//robots.txt
// https://earth2.io/robots.txt

let scrap = `nsole.log(metrics[0].innerText);
Metrics
NUMBER OF JEWELS CIRCULATING
57,328,917
TOTAL TIER 1 JEWELS CIRCULATION
52,511,561
TOTAL TIER 2 JEWELS CIRCULATION
1,805,072
TOTAL TIER 3 JEWELS CIRCULATION
3,012,284
TOTAL TIER 1 JEWELS MINED
96,410,498
NUMBER OF JEWEL MENTAR SLOTS
28,011,312
TOTAL NO. OF TILES PURCHASED
125,365,497
NO. OF T1 TILES PURCHASED
67,700,418
NO. OF T2 TILES PURCHASED
49,829,826
NO. OF T3 TILES PURCHASED
7,835,253
MAX SUPPLY (MINUS BURNT TOKENS)
984,421,148
MINTED TOKENS
311,145,376
BURNT TOKENS
15,578,852
E-THER COLLECTED PAST 24 HOURS
1,727,198
BIDS MADE TOTAL
2,186,796
BIDS REJECTED TOTAL
385,793
TOTAL HOLOBUILDINGS BUILT
1,257,059
NO. OF CYDROIDS
2,702,564
NO. OF CIVILIANS
1,839,253
NO. OF RAID COMMANDERS
500,000
NO. OF E-THER RECKONERS
500,000
NO. OF CYDROID TECHNICIANS
500,000
NO. OF GEOLOGISTS
339,253`;

//console.log(scrap);

// Si 1er élément = metrics = le remplacer par la date et l'heure actuelle au début

// https://waytolearnx.com/2019/09/comment-afficher-la-date-et-lheure-actuelles-en-javascript.html
let d = new Date();
let date = d.getFullYear() + `/` + (d.getMonth() + 1) + `/` + d.getDate();
let hours = d.getHours() + ":" + d.getMinutes();
let fullDate = date + " " + hours;
// console.log(fullDate);

let dailyData;
dailyData = scrap.replace(`Metrics`, "date\n" + date);
dailyData = dailyData.replaceAll(",", "");
dailyData = dailyData.replaceAll(")", "");
dailyData = dailyData.replaceAll("(", "");
dailyData = dailyData.replaceAll(".", "");
dailyData = dailyData.replaceAll("-", "");

// console.log(dailyData);

// Calcul nombre d'éléments à indexer
//console.log(dailyData.split(/\r\n|\r|\n/).length/2);

// Traiter les données pour qu'elles correspondent au format data.json

//console.log(dailyData);
// console.log(dailyData.split(/\r\n|\r|\n/));
dailyData = dailyData.split(/\r\n|\r|\n/); // Passe le string en objet

let tableau = [];
for (element in dailyData) {
  // console.log(dailyData[element].charAt(0)); // premier caractère
  // console.log(dailyData[element].charAt(dailyData[element].length-1)); // dernier caractère

  // Si le dernier caractère est une lettre , ajouter ": " et remplacer " " par "_" et tout mettre entre guillements
  if (
    dailyData[element].charAt(dailyData[element].length - 1).match(/[a-z]/i)
  ) {
    dailyData[element] = dailyData[element].replaceAll(" ", "_");
    dailyData[element] = dailyData[element] + `" : `; // Ajoute : à la fin de l'index
    //console.log(dailyData[element]);
    dailyData[element]=dailyData[element].toUpperCase();
    console.log(dailyData[element]);
  } else if (
    dailyData[element].charAt(dailyData[element].length - 1).match(/[0-9]/)
  ) {
    // Si le dernier caractère est un nombre : rajoute l'élément à l'élément précédent et incorpore le tout dans un tableau
    dailyData[element] =
      `"` + dailyData[element - 1] + `"` + dailyData[element] + `"`;

    console.log(dailyData[element]);
    tableau.push(dailyData[element]); //
  }

  //dailyData = dailyData.replaceAll(`\n`, ":");
}
// console.log(tableau);
// console.log(dailyData);

let dailyDataJSON = "";
for (element in tableau) {
  dailyDataJSON = dailyDataJSON + tableau[element] + ", ";

  // Supprimer la dernière virgule/dernier caractère
}
// console.log(dailyDataJSON);
//console.log(dailyDataJSON.charAt(dailyDataJSON.length-2));
dailyDataJSON = dailyDataJSON.substring(0, dailyDataJSON.length - 2);
console.log(dailyDataJSON);

// Uploader les données dans data.json

// Scraper
// https://medium.com/data-scraper-tips-tricks/scraping-data-with-javascript-in-3-minutes-8a7cf8275b31

/*
// Récupérer les données Metrics sur https://earth2.io/

// Récupérer la page Web



// Récupérer texte des h4 et h1 dans Classe MetricsItemHome_metricsItem__3cAcN
// index, h4 dans la class : MetricsItemHome_metricsItemTitle__1NSo5
// valeur, H1 dans la class : MetricsItemHome_metricsItemNumber__MsJYw
// afficher le texte dans les classes
let itemStat = pageWeb.querySelectorAll(".MetricsItemHome_metricsItem__3cAcN");
let index = pageWeb.querySelectorAll(".MetricsItemHome_metricsItemTitle__1NSo5");
let valeur = pageWeb.querySelectorAll(".MetricsItemHome_metricsItemNumber__MsJYw");
console.log(itemStat);
console.log(index.textContent);
console.log(valeur.innerText);
console.log(index.innerHTML);
*/

// document.execCommand('SaveAs',true,'.html');

// Hébergement web
// https://help.ovhcloud.com/csm/fr-web-hosting-multiple-websites-configuration?id=kb_article_view&sysparm_article=KB0052928
// https://help.ovhcloud.com/csm/fr-web-hosting-publishing-website?id=kb_article_view&sysparm_article=KB0052788


/* 
//Page Earth2
let metrics = document.getElementsByClassName("gap-y-6 grid justify-items-center xl:grid-cols-3 md:grid-cols-2");
console.log(metrics[0].innerText);

// Page Activities
let metrics = document.getElementsByClassName("ActivityComponent_metricsWrapper__PSYZP");
console.log(metrics[0].innerText);

*/


/*
let fetchExample = fetch("https://fjolt.com").then((res) => { 
console.log("test");  
});
let websiteData = fetch("https://earth2.io").then(res => res.text()).then((data) => { return data; }); // Now contains our website's HTML.
*/



/*
// https://youtu.be/gDmmokYDPOw
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://earth2.io/activities", true);
  xhr.responseType="document";
  xhr.onload = function(){ 
    if(xhr.readyState == 4 && xhr.status == 200)
    {  
    console.log("testOK");
    } 
  };
  xhr.onerror = function(){
    console.error(xhr.status, xhr.statusText);
  }
  xhr.send();
*/



// délai dans le code avant d'exécuter une fonction : setTimeout()
// https://developer.mozilla.org/fr/docs/Web/API/setTimeout
