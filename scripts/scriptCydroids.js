


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
  

// Lire JSON
// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
  async function afficherDerniereDataJSON() {
    const reponse = await fetch("./data.json");
    const array = await reponse.json();
  
    lastUpdate.innerHTML = array[array.length - 1].DATE;
  

// Cydroids
  let cydroids24hcalc =
  array[array.length - 1].NO_OF_CYDROIDS -
  array[array.length - 2].NO_OF_CYDROIDS;
let cydroids7dayscalc =
  array[array.length - 1].NO_OF_CYDROIDS -
  array[array.length - 7].NO_OF_CYDROIDS;
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

}







afficherDerniereDataJSON();


fetch("data.json")
  .then(function (response) {
    if (response.ok == true) {
      return response.json();
    }
  })
  .then(function (data) {
    createChartCydroids(data, "line");
  });
