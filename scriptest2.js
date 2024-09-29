let lastUpdate = document.getElementById("lastUpdate");

let technicians24h = document.getElementById("technicians24h");
let technicians7days = document.getElementById("technicians7days");
let techniciansOOS = document.getElementById("techniciansOOS");
let techniciansEstimatedDate = document.getElementById(
  "techniciansEstimatedDate"
);
let reckoners24h = document.getElementById("reckoners24h");
let reckoners7days = document.getElementById("reckoners7days");
let reckonersOOS = document.getElementById("reckonersOOS");
let reckonersEstimatedDate = document.getElementById("reckonersEstimatedDate");

let commanders24h = document.getElementById("commanders24h");
let commanders7days = document.getElementById("commanders7days");
let commandersOOS = document.getElementById("commandersOOS");
let commandersEstimatedDate = document.getElementById(
  "commandersEstimatedDate"
);
let geologists24h = document.getElementById("geologists24h");
let geologists7days = document.getElementById("geologists7days");
let geologistsOOS = document.getElementById("geologistsOOS");
let geologistsEstimatedDate = document.getElementById(
  "geologistsEstimatedDate"
);
let cydroids24h = document.getElementById("cydroids24h");
let cydroids7days = document.getElementById("cydroids7days");
let cydroidsOOS = document.getElementById("cydroidsOOS");
let cydroidsEstimatedDate = document.getElementById("cydroidsEstimatedDate");

let jewels24h = document.getElementById("jewels24h");
let jewels7days = document.getElementById("jewels7days");
let jewelsOOS = document.getElementById("jewelsOOS");
let jewelsEstimatedDate = document.getElementById("jewelsEstimatedDate");

/* 
//New feature : Daily Ether Collected
let etherCollected24h = document.getElementById("etherCollected24h");
let etherCollected7days = document.getElementById("etherCollected7days");

// New feature : Daily Ether spend to create civilians
let etherSpendToCivilians24h = document.getElementById("etherSpendToCivilians24h");
let etherUnspend = document.getElementById("etherUnspend24h");

// New feature : Daily Essence potentially generated
let essenceGenerated24h = document.getElementById("essenceGenerated24h");
let essenceGenerated7days = document.getElementById("essenceGenerated7days");
*/

// Estimated date civs
// https://www.equinode.com/fonctions-javascript/ajouter-des-jours-a-une-date-avec-javascript
function dateAddDays(a, b) {
  var d = new Date(b || new Date());
  d.setDate(d.getDate() + a);
  return d;
}
let today = new Date();
let dansXjours = 60;
// console.log(dateAddDays(dansXjours, today));
// Format date avec .toDateString()
// https://www.geeksforgeeks.org/how-to-format-a-date-in-javascript/


const geo = document.getElementById("e2geos");
function createChartGeologists(data, type) {
  new Chart(geo, {
    type: type,
    data: {
      //labels: /*abcisses*/ ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
      labels: data.map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        
        {
          label: "Geologists",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: data.map((row) => row.NO_OF_GEOLOGISTS),
          borderColor: "whitesmoke",
          backgroundColor: "whitesmoke",
        },
      ],
    },
  });
}


const ctx = document.getElementById("e2data");
function createChartCivilians(data, type) {
  new Chart(ctx, {
    type: type,
    data: {
      //labels: /*abcisses*/ ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
      labels: data.map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        {
          label: "Technicians",
          data: data.map((row) => row.NO_OF_CYDROID_TECHNICIANS),
          //backgroundColor: '#000000',
          borderColor: "#2DFC55",
          backgroundColor: "#2DFC55",
        },
        {
          label: "Reckoners",
          data: data.map((row) => row.NO_OF_ETHER_RECKONERS),
          //backgroundColor: '#000000',
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: "Commanders",
          data: data.map((row) => row.NO_OF_RAID_COMMANDERS),
          //backgroundColor: '#000000',
          borderColor: "rgb(254,0,76)",
          backgroundColor: "rgb(254,0,76)",
        }
      ],
    },
  });
}

// Lire JSON
// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
async function afficherDerniereDataJSON() {
  const reponse = await fetch("./data.json");
  const array = await reponse.json();

  lastUpdate.innerHTML = array[array.length - 1].DATE;

  // Technicians
  let technicians24hcalc =
    array[array.length - 1].NO_OF_CYDROID_TECHNICIANS -
    array[array.length - 2].NO_OF_CYDROID_TECHNICIANS;
  let technicians7dayscalc =
    array[array.length - 1].NO_OF_CYDROID_TECHNICIANS -
    array[array.length - 8].NO_OF_CYDROID_TECHNICIANS;
  let techniciansOOScalc = Math.trunc(
    (500000 - array[array.length - 1].NO_OF_CYDROID_TECHNICIANS) /
      (technicians7dayscalc / 7)
  );
  technicians24h.innerHTML = technicians24hcalc;
  technicians7days.innerHTML = technicians7dayscalc;
  techniciansOOS.innerHTML = "Done "; //techniciansOOScalc;
  techniciansEstimatedDate.innerHTML = "Tue Sep 03 2024";
  /*techniciansEstimatedDate.innerHTML = dateAddDays(
    techniciansOOScalc,
    today
  ).toDateString();*/

  // Reckoners
  let reckoners24hcalc =
    array[array.length - 1].NO_OF_ETHER_RECKONERS -
    array[array.length - 2].NO_OF_ETHER_RECKONERS;
  let reckoners7dayscalc =
    array[array.length - 1].NO_OF_ETHER_RECKONERS -
    array[array.length - 8].NO_OF_ETHER_RECKONERS;
  let reckonersOOScalc = Math.trunc(
    (500000 - array[array.length - 1].NO_OF_ETHER_RECKONERS) /
      (reckoners7dayscalc / 7)
  );
  reckoners24h.innerHTML = reckoners24hcalc;
  reckoners7days.innerHTML = reckoners7dayscalc;
  reckonersOOS.innerHTML = "Done "; //reckonersOOScalc;
  reckonersEstimatedDate.innerHTML = "Sat Sep 28 2024";
  // reckonersEstimatedDate.innerHTML = dateAddDays(reckonersOOScalc,today).toDateString();

  // Commanders
  let commanders24hcalc =
    array[array.length - 1].NO_OF_RAID_COMMANDERS -
    array[array.length - 2].NO_OF_RAID_COMMANDERS;
  let commanders7dayscalc =
    array[array.length - 1].NO_OF_RAID_COMMANDERS -
    array[array.length - 8].NO_OF_RAID_COMMANDERS;
  let commandersOOScalc = Math.trunc(
    (500000 - array[array.length - 1].NO_OF_RAID_COMMANDERS) /
      (commanders7dayscalc / 7)
  );
  commanders24h.innerHTML = commanders24hcalc;
  commanders7days.innerHTML = commanders7dayscalc;
  commandersOOS.innerHTML = commandersOOScalc;
  commandersOOS.innerHTML = "Done "; //commandersOOScalc;
  commandersEstimatedDate.innerHTML = "Sat Sep 28 2024";
  // commandersEstimatedDate.innerHTML = dateAddDays(commandersOOScalc,today).toDateString();


  // Geologists
  let geologists24hcalc =
    array[array.length - 1].NO_OF_GEOLOGISTS -
    array[array.length - 2].NO_OF_GEOLOGISTS;
  let geologists7dayscalc =
    array[array.length - 1].NO_OF_GEOLOGISTS -
    array[array.length - 8].NO_OF_GEOLOGISTS;
  let geologistsOOScalc = Math.trunc(
    (500000 - array[array.length - 1].NO_OF_GEOLOGISTS) /
      (geologists7dayscalc / 7)
  );
  geologists24h.innerHTML = geologists24hcalc;
  geologists7days.innerHTML = geologists7dayscalc;
  //    geologistsOOS.innerHTML = geologistsOOScalc;
  //       geologistsEstimatedDate.innerHTML = dateAddDays(geologistsOOScalc, today).toDateString();

  // Cydroids
  let cydroids24hcalc =
    array[array.length - 1].NO_OF_CYDROIDS -
    array[array.length - 2].NO_OF_CYDROIDS;
  let cydroids7dayscalc =
    array[array.length - 1].NO_OF_CYDROIDS -
    array[array.length - 8].NO_OF_CYDROIDS;
  let cydroidsOOScalc = Math.trunc(
    (5000000 - array[array.length - 1].NO_OF_CYDROIDS) / (cydroids7dayscalc / 7)
  );
  cydroids24h.innerHTML = cydroids24hcalc;
  cydroids7days.innerHTML = cydroids7dayscalc;
  cydroidsOOS.innerHTML = cydroidsOOScalc;
  cydroidsEstimatedDate.innerHTML = dateAddDays(
    cydroidsOOScalc,
    today
  ).toDateString();

  // Jewels
  let jewels24hcalc =
    array[array.length - 1].TOTAL_TIER_1_JEWELS_MINED -
    array[array.length - 2].TOTAL_TIER_1_JEWELS_MINED;
  let jewels7dayscalc =
    array[array.length - 1].TOTAL_TIER_1_JEWELS_MINED -
    array[array.length - 8].TOTAL_TIER_1_JEWELS_MINED;
  let jewelsOOScalc = Math.trunc(
    (125000000 - array[array.length - 1].TOTAL_TIER_1_JEWELS_MINED) /
      (jewels7dayscalc / 7)
  );
  jewels24h.innerHTML = jewels24hcalc;
  jewels7days.innerHTML = jewels7dayscalc;
  jewelsOOS.innerHTML = jewelsOOScalc;
  jewelsEstimatedDate.innerHTML = dateAddDays(
    jewelsOOScalc,
    today
  ).toDateString();



 
// New feature : Daily Ether Collected
// New feature : Daily Essence potentially generated

// New feature : Daily Ether spend to create civilians
//let etherSpend = (technicians24hcalc + reckoners24hcalc + commanders24hcalc)*25 + (geologists24hcalc * 10);
//console.log("Total : " + etherSpend + " Ether");


}




afficherDerniereDataJSON();

/*
const afficherDerniereDataJSON2 = async () => {
    const reponse = await fetch("./data.json");
    const array = await reponse.json();
    console.log("Since 24h : ");
    console.log(array[array.length-1].NO_OF_CYDROIDS - array[array.length-2].NO_OF_CYDROIDS);
}
afficherDerniereDataJSON2(); */

const ctxCydroids = document.getElementById("e2cydroids");
function createChartCydroids(data2, type2) {
  new Chart(ctxCydroids, {
    type: type2,
    data: {
      labels: data2.map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        {
          label: "Cydroids",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: data2.map((row) => row.NO_OF_CYDROIDS),
          borderColor: "whitesmoke",
          backgroundColor: "whitesmoke",
        },
      ],
    },
    /*options: {
            legend: {
                labels:{
                    fontColor: 'white';
                }
            }
        }*/
  });
}

const ctxJewels = document.getElementById("e2jewels");
function createChartJewels(data3, type3) {
  new Chart(ctxJewels, {
    type: type3,
    data: {
      labels: data3.map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        {
          label: "Total T1 mined",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: data3.map((row) => row.TOTAL_TIER_1_JEWELS_MINED),
          borderColor: "whitesmoke",
        },
        {
          label: "Total in circulation",
          data: data3.map((row) => row.NUMBER_OF_JEWELS_CIRCULATING),
          //backgroundColor: '#000000',
          borderColor: "rgb(225,57,57)",
        },
        {
          label: "Total T1 in circulation",
          data: data3.map((row) => row.TOTAL_TIER_1_JEWELS_CIRCULATION),
          //backgroundColor: '#000000',
          borderColor: "violet",
        },
        {
          label: "Total T2 in circulation",
          data: data3.map((row) => row.TOTAL_TIER_2_JEWELS_CIRCULATION),
          //backgroundColor: '#000000',
          borderColor: "blue",
        },
        {
          label: "Total T3 in circulation",
          data: data3.map((row) => row.TOTAL_TIER_3_JEWELS_CIRCULATION),
          //backgroundColor: '#000000',
          borderColor: "cyan",
        },
      ],
    },
  });
}

const ctxEssence = document.getElementById("e2essence");
function createChartEssence(data4, type4) {
  new Chart(ctxEssence, {
    type: type4,
    data: {
      labels: ["04/2024", "06/2024"],
      datasets: /*ordonnées*/ [
        {
          label: "Essence",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: [188000000, 300000000],
          borderColor: "rgb(81,226,195)",
          backgroundColor: "rgb(81,226,195)",
        },
      ],
    },
    /*,
        options: {
            legend: {
                labels:{
                    fontColor: 'white',
                }
            }
        }*/
  });
}

// Chercher les données dans le JSON et appel de la fonction createChart
fetch("data.json")
  .then(function (response) {
    if (response.ok == true) {
      return response.json();
    }
  })
  .then(function (data) {
    createChartGeologists(data,"line");

    createChartCivilians(data, "line");
    createChartCydroids(data, "line");
    createChartJewels(data, "line");
    createChartEssence(data, "line");
  });
// Traitement des données
// supprimer les . et remplacer " " par "_" dans les index
// supprimer les , dans les données

/*15/07-   571k 3 días

12/07 -  173k
11/07 -  289k
10/07 -  178k
09/07 -  123K
08/07 -  418k

05/07 -  206k
04/07 -  268k
03/07 -  344k
02/07 -  397k
01/07 -  590k

28/06 -   85k
27/06 -  300k
26/06 -  379k
25/06 -  225k
24/06 -  1.2  M

21/06 -  426k
20/06 -  189k
19/06 -  357k
18/06 -  513k
17/06 -  974k

14/06 -  476k
13/06 -  225k
12/06 -  646k
11/06 -  879k 
10/03 -  1.87 M

07/06 -  737k
06/06 -  980k
05/06 -   2 M
04/06 -  3.4 M

*/
