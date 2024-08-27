//robots.txt
// https://earth2.io/robots.txt

let scrap = `Metrics
Number of Jewels circulating
48,561,357
Total Tier 1 Jewels Circulation
44,099,905
Total Tier 2 Jewels Circulation
1,709,625
Total Tier 3 Jewels Circulation
2,751,827
Total Tier 1 Jewels Mined
82,653,366
Number of Jewel Mentar Slots
27,666,841
Total No. of Tiles purchased
123,828,069
No. of T1 Tiles purchased
67,250,654
No. of T2 Tiles purchased
49,467,115
No. of T3 Tiles purchased
7,110,300
Max Supply (minus burnt tokens)
984,421,148
Minted Tokens
311,145,376
Burnt Tokens
15,578,852
E-ther Collected past 24 hours
1,716,327
Bids Made Total
2,114,461
Bids rejected Total
374,184
Total Holobuildings Built
1,221,117
No. of Cydroids
2,574,902
No. of Civilians
1,679,704
No. of Raid Commanders
451,253
No. of E-ther Reckoners
455,805
No. of Cydroid Technicians
480,494
No. of Geologists
292,152`;

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
Page Earth2
let metrics = document.getElementsByClassName("gap-y-6 grid justify-items-center xl:grid-cols-3 md:grid-cols-2");
console.log(metrics[0].innerText);

Page Activities
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
