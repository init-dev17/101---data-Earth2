

function createChart(chartID, JSONfile, ) {
    // variables:
    // id du chart
    // fichier JSON
    // type de graphique (line, bar, etc... )
    // données axeY : labels
    // données axeX : cydroids, jewels, civilians, etc ...
}


const ctxCydroids = document.getElementById("e2cydroids");

function createChartCydroids(dataLink, chartType) {
  new Chart(ctxCydroids, {
    type: chartType,
    data: {
      labels: dataLink.map((row) => row.DATE),
      datasets: /*ordonnées*/ [
        {
          label: "Cydroids",
          //data: ['1', '2', '3', '4', '5', '6'],
          data: dataLink.map((row) => row.NO_OF_CYDROIDS),
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

fetch("data.json")
  .then(function (response) {
    if (response.ok == true) {
      return response.json();
    }
  })
  .then(function (dataJSON) {
    createChartCydroids(dataJSON, "line");
  });
