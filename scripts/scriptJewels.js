


const ctxJewels = document.getElementById("e2jewels");

function createChartJewels(data3, type3) {
  new Chart(ctxJewels, {
    type: type3,
    data: {
      labels: data3.map((row) => row.date),
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
  
    lastUpdate.innerHTML = array[array.length - 1].date;
  

// Jewels
let jewels24hcalc =
array[array.length - 1].TOTAL_TIER_1_JEWELS_MINED -
array[array.length - 2].TOTAL_TIER_1_JEWELS_MINED;
let jewels7dayscalc =
array[array.length - 1].TOTAL_TIER_1_JEWELS_MINED -
array[array.length - 7].TOTAL_TIER_1_JEWELS_MINED;
let jewelsOOScalc = Math.trunc(
(125000000 - array[array.length - 1].TOTAL_TIER_1_JEWELS_MINED) /
  (jewels7dayscalc / 7)
);
jewels24h.innerHTML = jewels24hcalc;
jewels7days.innerHTML = jewels7dayscalc;
jewelsOOS.innerHTML = jewelsOOScalc;
jewelsEstimatedDate.innerHTML = dateAddDays(jewelsOOScalc,today).toDateString();


}







afficherDerniereDataJSON();


fetch("data.json")
  .then(function (response) {
    if (response.ok == true) {
      return response.json();
    }
  })
  .then(function (data) {
    createChartJewels(data, "line");
  });
