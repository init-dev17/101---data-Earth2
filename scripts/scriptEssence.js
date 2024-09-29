
const ctxEther = document.getElementById("e2ether");
function createChartEther(data, type) {
  new Chart(ctxEther, {
    type: type,
    data: {
      labels: data.map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        {
          label: "Ether collected last 24h",
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
