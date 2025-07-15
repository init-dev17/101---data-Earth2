


const ctxLandsTotal = document.getElementById("e2landsTotal");
function createChartLandsTotal(data2, type2) {
  new Chart(ctxLandsTotal, {
    type: type2,
    data: {
      labels: data2.map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        {
          label: "Total lands purchased",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: data2.map((row) => row.TOTAL_NO_OF_TILES_PURCHASED),
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


const ctxLandsT1 = document.getElementById("e2landsT1");
function createChartLandsT1(data2, type2) {
  new Chart(ctxLandsT1, {
    type: type2,
    data: {
      labels: data2.map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        {
          label: "T1 lands purchased",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: data2.map((row) => row.NO_OF_T1_TILES_PURCHASED),
          borderColor: "orange",
          backgroundColor: "orange",
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

const ctxLandsT2 = document.getElementById("e2landsT2");
function createChartLandsT2(data2, type2) {
  new Chart(ctxLandsT2, {
    type: type2,
    data: {
      labels: data2.map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        {
          label: "T2 lands purchased",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: data2.map((row) => row.NO_OF_T2_TILES_PURCHASED),
          borderColor: "DarkViolet",
          backgroundColor: "DarkViolet",
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

const ctxLandsT3 = document.getElementById("e2landsT3");
function createChartLandsT3(data2, type2) {
  new Chart(ctxLandsT3, {
    type: type2,
    data: {
      labels: data2.map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        {
          label: "T3 lands purchased",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: data2.map((row) => row.NO_OF_T3_TILES_PURCHASED),
          borderColor: "#578EF8",
          backgroundColor: "#578EF8",
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



let landsTotal = document.getElementById("landsTotal");
let landsT1 = document.getElementById("landsT1");
let landsT2 = document.getElementById("landsT2");
let landsT3 = document.getElementById("landsT3");

// Lire JSON
// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
async function afficherDerniereDataJSON() {
  const reponse = await fetch("./data.json");
  const array = await reponse.json();
  
  lastUpdate.innerHTML = array[array.length - 1].DATE;


    
  landsTotal.innerText = parseInt(array[array.length - 1].TOTAL_NO_OF_TILES_PURCHASED).toLocaleString('en-US');
  landsT1.innerText = parseInt(array[array.length - 1].NO_OF_T1_TILES_PURCHASED).toLocaleString('en-US');
  landsT2.innerText = parseInt(array[array.length - 1].NO_OF_T2_TILES_PURCHASED).toLocaleString('en-US');
  landsT3.innerText = parseInt(array[array.length - 1].NO_OF_T3_TILES_PURCHASED).toLocaleString('en-US');

}










afficherDerniereDataJSON();


fetch("data.json")
  .then(function (response) {
    if (response.ok == true) {
      return response.json();
    }
  })
  .then(function (data) {
    createChartLandsTotal(data, "line");
    createChartLandsT1(data, "line");
    createChartLandsT2(data, "line");
    createChartLandsT3(data, "line");


    
  });

