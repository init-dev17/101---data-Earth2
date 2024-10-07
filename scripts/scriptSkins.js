

// Lire JSON
// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
async function afficherDerniereDataJSON() {
    const reponse = await fetch("./data.json");
    const array = await reponse.json();
    
    lastUpdate.innerHTML = array[array.length - 1].DATE;
}
afficherDerniereDataJSON();





fetch("./scripts/skins.json")
  .then(function (response) {
    if (response.ok == true) {
      return response.json();
    }
})
.then(function (data) {
    console.log(data);


    
    function genererSkins(release){
        for(release in data) {
            console.log("MODELE : " + release);

        
            for(skin in data[release]) {
                // console.log(skin);
                console.log(data[release][skin].Skin_Name);
                
            }
        }
        
    }

    genererSkins();
    // console.log(data.Murushierago[0].Type);
    
    



});




/*

Skin Name
Type:
Description:
Total Supply:
Items Available:
EcoSim Total:
EcoSim Drop Chance:
Base Item Required:
Customisation:
Can Be Resold:
Future Price Reduction:
Realeasing Price:
Image:
Video:

*/


