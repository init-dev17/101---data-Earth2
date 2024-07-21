


const ctx = document.getElementById('e2data');

const data = {
    labels: /*abcisses*/ ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    // labels: data.map(row => row.date),
    datasets : /*ordonnées*/ [{
        data: ['1', '2', '3', '4', '5', '6'], 
        // data: data.map(row => row.NO_OF_GEOLOGISTS),
        borderColor: 'blue',
    },
    {
        data: ['6', '5', '4', '3', '2', '1'], 
        //backgroundColor: '#000000',
        borderColor: 'rgb(225,57,57)',
    }]
};
const options = {
    // min and max Y value
    // https://stackoverflow.com/questions/28990708/how-to-set-max-and-min-value-for-y-axis
};
const config = {
     type: 'line',
     data: data,
     options: options,
};

//const graph = new Chart(ctx, config);
    

function createChart(data,type,options){
    new Chart(ctx,config)  
};



// Chercher les données dans le JSON et appel de la fonction createChart
fetch('data.json')
.then(function(response){
    if(response.ok == true){
        return response.json();
    }
})
.then(function(data){
    createChart(data, 'line')
    }
);



