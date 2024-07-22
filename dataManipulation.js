

let scrap = `Metrics
NUMBER OF JEWELS CIRCULATING
46,320,973
TOTAL TIER 1 JEWELS CIRCULATION
41,940,956
TOTAL TIER 2 JEWELS CIRCULATION
1,704,897
TOTAL TIER 3 JEWELS CIRCULATION
2,675,120
TOTAL TIER 1 JEWELS MINED
79,059,549
NUMBER OF JEWEL MENTAR SLOTS
27,560,728
TOTAL NO. OF TILES PURCHASED
123,441,658
NO. OF T1 TILES PURCHASED
67,164,349
NO. OF T2 TILES PURCHASED
49,302,689
NO. OF T3 TILES PURCHASED
6,974,620
MAX SUPPLY (MINUS BURNT TOKENS)
986,742,398
MINTED TOKENS
311,145,376
BURNT TOKENS
13,257,602
E-THER COLLECTED PAST 24 HOURS
1,734,354
BIDS MADE TOTAL
2,085,017
BIDS REJECTED TOTAL
368,845
TOTAL HOLOBUILDINGS BUILT
1,204,455
NO. OF CYDROIDS
2,531,887
NO. OF CIVILIANS
1,583,880
NO. OF RAID COMMANDERS
426,874
NO. OF E-THER RECKONERS
430,779
NO. OF CYDROID TECHNICIANS
441,909
NO. OF GEOLOGISTS
284,318`

//console.log(scrap);


// Si 1er élément = metrics = le remplacer par la date et l'heure actuelle au début




// https://waytolearnx.com/2019/09/comment-afficher-la-date-et-lheure-actuelles-en-javascript.html
let d = new Date();
let date = d.getFullYear() + `/` + (d.getMonth()+1) + `/` + d.getDate();
let hours = d.getHours() + ":" + d.getMinutes();
let fullDate = date+' '+hours;
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


let tableau=[];
for (element in dailyData) {
    // console.log(dailyData[element].charAt(0)); // premier caractère
    // console.log(dailyData[element].charAt(dailyData[element].length-1)); // dernier caractère


    // Si le dernier caractère est une lettre , ajouter ": " et remplacer " " par "_" et tout mettre entre guillements
    if (dailyData[element].charAt(dailyData[element].length-1).match(/[a-z]/i)) {
        dailyData[element] = dailyData[element].replaceAll(" ", "_");
        dailyData[element] = dailyData[element] + `" : `; // Ajoute : à la fin de l'index
        //console.log(dailyData[element]);
        
        console.log(dailyData[element]);

    } else if (dailyData[element].charAt(dailyData[element].length-1).match(/[0-9]/)) {
        // Si le dernier caractère est un nombre : rajoute l'élément à l'élément précédent et incorpore le tout dans un tableau
        dailyData[element] = `"` + dailyData[element-1] + `"` + dailyData[element] +`"`; 
        
        console.log(dailyData[element]);
        tableau.push(dailyData[element]); // 
    }
    
        //dailyData = dailyData.replaceAll(`\n`, ":");
}
// console.log(tableau);
// console.log(dailyData);

let dailyDataJSON = "";
for(element in tableau) {
        dailyDataJSON = dailyDataJSON + tableau[element] + ", ";

// Supprimer la dernière virgule/dernier caractère
}
// console.log(dailyDataJSON);
//console.log(dailyDataJSON.charAt(dailyDataJSON.length-2));
dailyDataJSON = dailyDataJSON.substring(0, dailyDataJSON.length - 2);
console.log(dailyDataJSON);



// Uploader les données dans data.json






