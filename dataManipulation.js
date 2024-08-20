//robots.txt
// https://earth2.io/robots.txt

let scrap = `Metrics
Number of Jewels circulating
48,151,418
Total Tier 1 Jewels Circulation
43,706,050
Total Tier 2 Jewels Circulation
1,708,146
Total Tier 3 Jewels Circulation
2,737,222
Total Tier 1 Jewels Mined
81,983,409
Number of Jewel Mentar Slots
27,649,636
Total No. of Tiles purchased
123,769,431
No. of T1 Tiles purchased
67,244,876
No. of T2 Tiles purchased
49,431,869
No. of T3 Tiles purchased
7,092,686
Max Supply (minus burnt tokens)
984,421,148
Minted Tokens
311,145,376
Burnt Tokens
15,578,852
E-ther Collected past 24 hours
1,777,695
Bids Made Total
2,111,149
Bids rejected Total
373,471
Total Holobuildings Built
1,219,147
No. of Cydroids
2,566,306
No. of Civilians
1,659,211
No. of Raid Commanders
446,179
No. of E-ther Reckoners
450,465
No. of Cydroid Technicians
471,806
No. of Geologists
290,761`;

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


/* 9/08/2024 

Metrics
Number of Jewels circulating
47,500,956
Total Tier 1 Jewels Circulation
43,082,952
Total Tier 2 Jewels Circulation
1,706,620
Total Tier 3 Jewels Circulation
2,711,384
Total Tier 1 Jewels Mined
80,911,431
Number of Jewel Mentar Slots
27,626,115
Total No. of Tiles purchased
123,650,816
No. of T1 Tiles purchased
67,231,378
No. of T2 Tiles purchased
49,366,326
No. of T3 Tiles purchased
7,053,112
Max Supply (minus burnt tokens)
984,421,148
Minted Tokens
311,145,376
Burnt Tokens
15,578,852
E-ther Collected past 24 hours
1,753,823
Bids Made Total
2,100,763
Bids rejected Total
372,041
Total Holobuildings Built
1,214,893
No. of Cydroids
2,554,320
No. of Civilians
1,627,738
No. of Raid Commanders
438,581
No. of E-ther Reckoners
442,177
No. of Cydroid Technicians
459,377
No. of Geologists
287,603

*/



/* 10/08/2024 

Metrics
Number of Jewels circulating
47,564,404
Total Tier 1 Jewels Circulation
43,145,555
Total Tier 2 Jewels Circulation
1,705,891
Total Tier 3 Jewels Circulation
2,712,958
Total Tier 1 Jewels Mined
81,006,352
Number of Jewel Mentar Slots
27,627,931
Total No. of Tiles purchased
123,658,533
No. of T1 Tiles purchased
67,233,550
No. of T2 Tiles purchased
49,370,104
No. of T3 Tiles purchased
7,054,879
Max Supply (minus burnt tokens)
984,421,148
Minted Tokens
311,145,376
Burnt Tokens
15,578,852
E-ther Collected past 24 hours
1,684,483
Bids Made Total
2,102,284
Bids rejected Total
372,183
Total Holobuildings Built
1,215,236
No. of Cydroids
2,555,492
No. of Civilians
1,630,664
No. of Raid Commanders
439,293
No. of E-ther Reckoners
442,971
No. of Cydroid Technicians
460,459
No. of Geologists
287,941


,
{"date" : "2024/8/10", "Number_of_Jewels_circulating" : "47500956", "Total_Tier_1_Jewels_Circulation" : "43082952", "Total_Tier_2_Jewels_Circulation" : "1706620", "Total_Tier_3_Jewels_Circulation" : "2711384", "Total_Tier_1_Jewels_Mined" : "80911431", "Number_of_Jewel_Mentar_Slots" : "27626115", "Total_No_of_Tiles_purchased" : "123650816", "No_of_T1_Tiles_purchased" : "67231378", "No_of_T2_Tiles_purchased" : "49366326", "No_of_T3_Tiles_purchased" : "7053112", "Max_Supply_minus_burnt_tokens" : "984421148", "Minted_Tokens" : "311145376", "Burnt_Tokens" : "15578852", "Ether_Collected_past_24_hours" : "1753823", "Bids_Made_Total" : "2100763", "Bids_rejected_Total" : "372041", "Total_Holobuildings_Built" : "1214893", "No_of_Cydroids" : "2554320", "No_of_Civilians" : "1627738", "No_of_Raid_Commanders" : "438581", "No_of_Ether_Reckoners" : "442177", "No_of_Cydroid_Technicians" : "459377", "No_of_Geologists" : "287603"}

*/