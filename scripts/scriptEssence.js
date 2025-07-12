
const ctxEther = document.getElementById("e2ether");
function createChartEther(data, type) {
  new Chart(ctxEther, {
    type: type,
    data: {
      labels: data.map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        {
          label: "Ether collected past 24h",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: data.map((row) => row.ETHER_COLLECTED_PAST_24_HOURS),
          borderColor: "DarkGray",
          backgroundColor: "DarkGray",
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



const ctxEssence = document.getElementById("e2essence");
function createChartEssence(data4, type4) {
  new Chart(ctxEssence, {
    type: type4,
    data: {
      labels: data4.map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        {
          label: "Max supply - burnt tokens (ESS)",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: data4.map((row) => row.MAX_SUPPLY_MINUS_BURNT_TOKENS),
          borderColor: "rgb(255, 255, 255)",
          backgroundColor: "rgb(255, 255, 255)",
        },
        {
          label: "Minted token (ESS)",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: data4.map((row) => row.MINTED_TOKENS),
          borderColor: "rgb(81,226,195)",
          backgroundColor: "rgb(81,226,195)",
        },
        {
          label: "Burned token",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: data4.map((row) => row.BURNT_TOKENS),
          borderColor: "rgb(226, 81, 81)",
          backgroundColor: "rgb(226, 81, 81)",
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
}







afficherDerniereDataJSON();


fetch("data.json")
  .then(function (response) {
    if (response.ok == true) {
      return response.json();
    }
  })
  .then(function (data) {
    createChartEther(data,"bar");
    createChartEssence(data, "line");
});






/*


Au 31 mars 2025: 64,410,742 $ESS miné depuis le 1er juin 2024 (304 jours)
Soit 212000 $ESS miné par jour

1m7 Ether généré chaque jour avec 15.38% de conversion = 110500 $ESS généré par jour


https://earth2.io/news/ess-31-mar-25
As of May 14, 2025 with the tokens flagged for minting since March 31 and the newly minted $ESS tokens included in this update, Earth 2 has surpassed a significant milestone of 430,000,000 minted tokens. This achievement brings us less than 70,000,000 tokens away from the first halving event.

Il reste moins de 430 millions



Less than 70millions before halving
Based on ether production:
I use 1.7 million ether per day = 110500 ESS /day = halving in 636 days : february 2027

From june 1st 2024 to march 31 2025 : 64,410,742 ESS / 304 days = 212000 $ESS/day
Halving in  330 days : april 2026

*/