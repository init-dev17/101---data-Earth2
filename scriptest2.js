




const ctx = document.getElementById('e2data');

function createChart(data,type){
    new Chart(ctx, {
        type: type,
        data:{
            //labels: /*abcisses*/ ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
            labels: data.map(row => row.date),
            datasets : /*ordonnées*/ [{
                label: 'Geologists',
                //data: ['1', '2', '3', '4', '5', '6'], 
                data: data.map(row => row.NO_OF_GEOLOGISTS),
                borderColor: 'black',
            },        
            {
                label: 'Commanders',
                data: data.map(row => row.NO_OF_RAID_COMMANDERS),
                //backgroundColor: '#000000',
                borderColor: 'rgb(225,57,57)',
            },
            {
                label: 'Reckoners',
                data: data.map(row => row.NO_OF_ETHER_RECKONERS),
                //backgroundColor: '#000000',
                borderColor: 'blue',
            },
            {
                label: 'Technicians',
                data: data.map(row => row.NO_OF_CYDROID_TECHNICIANS),
                //backgroundColor: '#000000',
                borderColor: 'green',
            }]
        }
    })
};


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
