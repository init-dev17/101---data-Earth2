
const ctx = document.getElementById("e2data");

function createChartCivilians(data, type) {
  new Chart(ctx, {
    type: type,
    data: {
      //labels: /*abcisses*/ ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
      labels: data.slice(0, 77).map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        {
          label: "Technicians",
          data: data.slice(0, 77).map((row) => row.NO_OF_CYDROID_TECHNICIANS),
          //backgroundColor: '#000000',
          borderColor: "#2DFC55",
          backgroundColor: "#2DFC55",
        },
        {
          label: "Reckoners",
          data: data.slice(0, 77).map((row) => row.NO_OF_ETHER_RECKONERS),
          //backgroundColor: '#000000',
          borderColor: "blue",
          backgroundColor: "blue",
        },
        {
          label: "Commanders",
          data: data.slice(0, 77).map((row) => row.NO_OF_RAID_COMMANDERS),
          //backgroundColor: '#000000',
          borderColor: "rgb(254,0,76)",
          backgroundColor: "rgb(254,0,76)",
        }        
      ],
    },
  });
}


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
//techniciansEstimatedDate.innerHTML = dateAddDays(techniciansOOScalc,today).toDateString();

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
//reckonersEstimatedDate.innerHTML = dateAddDays(reckonersOOScalc,today).toDateString();

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

}



afficherDerniereDataJSON();


fetch("data.json")
  .then(function (response) {
    if (response.ok == true) {
      return response.json();
    }
  })
  .then(function (data) {
    createChartCivilians(data, "line");
    createChartGeologists(data,"line");

  });

