



let lastUpdate = document.getElementById("lastUpdate");
let technicians24h = document.getElementById("technicians24h");
let technicians7days = document.getElementById("technicians7days");
let techniciansOOS = document.getElementById("techniciansOOS");
let techniciansEstimatedDate = document.getElementById("techniciansEstimatedDate");
let reckoners24h = document.getElementById("reckoners24h");
let reckoners7days = document.getElementById("reckoners7days");
let reckonersOOS = document.getElementById("reckonersOOS");
let reckonersEstimatedDate = document.getElementById("reckonersEstimatedDate");
let commanders24h = document.getElementById("commanders24h");
let commanders7days = document.getElementById("commanders7days");
let commandersOOS = document.getElementById("commandersOOS");
let commandersEstimatedDate = document.getElementById("commandersEstimatedDate");
let geologists24h = document.getElementById("geologists24h");
let geologists7days = document.getElementById("geologists7days");
let geologistsOOS = document.getElementById("geologistsOOS");
let geologistsEstimatedDate = document.getElementById("geologistsEstimatedDate");


// Estimated date civs
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


const ctx = document.getElementById('e2data');

function createChart(data,type){
    new Chart(ctx, {
        type: type,
        data:{
            //labels: /*abcisses*/ ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
            labels: data.map(row => row.date),
            datasets : /*ordonnées*/ [
                {
                label: 'Technicians',
                data: data.map(row => row.NO_OF_CYDROID_TECHNICIANS),
                //backgroundColor: '#000000',
                borderColor: 'green',
            },
            {
                label: 'Reckoners',
                data: data.map(row => row.NO_OF_ETHER_RECKONERS),
                //backgroundColor: '#000000',
                borderColor: 'blue',
            },
            {
                label: 'Commanders',
                data: data.map(row => row.NO_OF_RAID_COMMANDERS),
                //backgroundColor: '#000000',
                borderColor: 'rgb(225,57,57)',
            },
            {
                label: 'Geologists',
                //data: ['1', '2', '3', '4', '5', '6'], 
                data: data.map(row => row.NO_OF_GEOLOGISTS),
                borderColor: 'black',
            }]
        }
    })
};

// Lire JSON
// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
async function afficherDerniereDataJSON() {
    const reponse = await fetch("./data.json");
    const array = await reponse.json();

    lastUpdate.innerHTML = array[array.length-1].date;

    // Technicians
    let technicians24hcalc = array[array.length-1].NO_OF_CYDROID_TECHNICIANS - array[array.length-2].NO_OF_CYDROID_TECHNICIANS;
    let technicians7dayscalc = array[array.length-1].NO_OF_CYDROID_TECHNICIANS - array[array.length-7
    ].NO_OF_CYDROID_TECHNICIANS;
    let techniciansOOScalc = Math.trunc((500000-array[array.length-1].NO_OF_CYDROID_TECHNICIANS)/ (technicians7dayscalc/7));
    technicians24h.innerHTML = technicians24hcalc;
    technicians7days.innerHTML = technicians7dayscalc; 
    techniciansOOS.innerHTML = techniciansOOScalc; 
    techniciansEstimatedDate.innerHTML = dateAddDays(techniciansOOScalc, today).toDateString();


    // Reckoners
    let reckoners24hcalc = array[array.length-1].NO_OF_ETHER_RECKONERS - array[array.length-2].NO_OF_ETHER_RECKONERS;
    let reckoners7dayscalc = array[array.length-1].NO_OF_ETHER_RECKONERS - array[array.length-7
    ].NO_OF_ETHER_RECKONERS;
    let reckonersOOScalc = Math.trunc((500000-array[array.length-1].NO_OF_ETHER_RECKONERS)/ (reckoners7dayscalc/7));
    reckoners24h.innerHTML = reckoners24hcalc;
    reckoners7days.innerHTML = reckoners7dayscalc; 
    reckonersOOS.innerHTML = reckonersOOScalc;
    reckonersEstimatedDate.innerHTML = dateAddDays(reckonersOOScalc, today).toDateString();

    // Commanders
    let commanders24hcalc = array[array.length-1].NO_OF_RAID_COMMANDERS - array[array.length-2].NO_OF_RAID_COMMANDERS;
    let commanders7dayscalc = array[array.length-1].NO_OF_RAID_COMMANDERS - array[array.length-7].NO_OF_RAID_COMMANDERS;
    let commandersOOScalc = Math.trunc((500000-array[array.length-1].NO_OF_RAID_COMMANDERS)/ (commanders7dayscalc/7));
    commanders24h.innerHTML = commanders24hcalc;
    commanders7days.innerHTML = commanders7dayscalc; 
    commandersOOS.innerHTML = commandersOOScalc; 
    commandersEstimatedDate.innerHTML = dateAddDays(commandersOOScalc, today).toDateString();

    // Geologists
    let geologists24hcalc = array[array.length-1].NO_OF_GEOLOGISTS - array[array.length-2].NO_OF_GEOLOGISTS;
    let geologists7dayscalc = array[array.length-1].NO_OF_GEOLOGISTS - array[array.length-7].NO_OF_GEOLOGISTS;
    let geologistsOOScalc = Math.trunc((500000-array[array.length-1].NO_OF_GEOLOGISTS)/ (geologists7dayscalc/7));
    geologists24h.innerHTML = geologists24hcalc;
    geologists7days.innerHTML = geologists7dayscalc; 
    geologistsOOS.innerHTML = geologistsOOScalc; 
    geologistsEstimatedDate.innerHTML = dateAddDays(geologistsOOScalc, today).toDateString();


}
afficherDerniereDataJSON();

const afficherDerniereDataJSON2 = async () => {
    const reponse = await fetch("./data.json");
    const array = await reponse.json();
    console.log("Since 24h : ");
    console.log(array[array.length-1].NO_OF_CYDROIDS - array[array.length-2].NO_OF_CYDROIDS);
}
afficherDerniereDataJSON2();






const ctxCydroids = document.getElementById('e2cydroids');
function createChart2(data2,type2){
    new Chart(ctxCydroids, {
        type: type2,
        data:{
            labels: data2.map(row => row.date),
            datasets : /*ordonnées*/ [{
                label: 'Cydroids',
                //data: ['1', '2', '3', '4', '5', '6'], 
                data: data2.map(row => row.NO_OF_CYDROIDS),
                borderColor: 'black',
            }]
        }
    })
};


const ctxJewels = document.getElementById('e2jewels');
function createChart3(data3,type3){
    new Chart(ctxJewels, {
        type: type3,
        data:{
            labels: data3.map(row => row.date),
            datasets : /*ordonnées*/ [{
                label: 'Total T1 mined',
                //data: ['1', '2', '3', '4', '5', '6'], 
                data: data3.map(row => row.TOTAL_TIER_1_JEWELS_MINED),
                borderColor: 'black',
            },        
            {
                label: 'Total in circulation',
                data: data3.map(row => row.NUMBER_OF_JEWELS_CIRCULATING),
                //backgroundColor: '#000000',
                borderColor: 'rgb(225,57,57)',
            },        
            {
                label: 'Total T1 in circulation',
                data: data3.map(row => row.TOTAL_TIER_1_JEWELS_CIRCULATION),
                //backgroundColor: '#000000',
                borderColor: 'violet',
            },        
            {
                label: 'Total T2 in circulation',
                data: data3.map(row => row.TOTAL_TIER_2_JEWELS_CIRCULATION),
                //backgroundColor: '#000000',
                borderColor: 'blue',
            },        
            {
                label: 'Total T3 in circulation',
                data: data3.map(row => row.TOTAL_TIER_3_JEWELS_CIRCULATION),
                //backgroundColor: '#000000',
                borderColor: 'cyan',
            }]
        }
    })
};







// Chercher les données dans le JSON et appel de la fonction createChart
fetch('data.json')
.then(function(response){
    if(response.ok == true){
        return response.json()
    }
})
.then(function(data){
    createChart(data, 'line')
    createChart2(data, 'line')
    createChart3(data, 'line')
    }
);
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





