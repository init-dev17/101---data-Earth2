

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

            const skins = document.querySelector(".skins");

            const releaseName = document.createElement("h2");
            releaseName.innerText = release;
            skins.appendChild(releaseName);

           
        
            for(skin in data[release]) {
                // console.log(skin);
                // console.log(data[release][skin].Image);
                // console.log(data[release][skin].Skin_Name);
                

                const element = document.createElement("div");
                element.classList.add("skins-container");

                const imgSkins = document.createElement("div");
                imgSkins.classList.add("img-skins");
                
                const imgBtn = document.createElement("button");
                imgBtn.innerText = "Play"
                imgBtn.setAttribute("id","skin-btn");

                const img = document.createElement("img");
                img.src = "./assets/Skins/" + data[release][skin].Image;

                const infoSkins = document.createElement("div");
                infoSkins.classList.add("info-skins");

                const paragraphe = document.createElement("span");
                

                skins.appendChild(element);
                element.appendChild(imgSkins);
                imgSkins.appendChild(img);
                imgSkins.appendChild(imgBtn);
                
                element.appendChild(infoSkins);
                // paragraphe.innerText = "Skin Name: " + data[release][skin].Skin_Name;
                paragraphe.innerHTML = "Skin Name: " + data[release][skin].Skin_Name + "<br>" +
                "Type: " + data[release][skin].Type + "<br>" +
                "Description: " + data[release][skin].Description + "<br>" +
                "Total Supply: " + data[release][skin].Total_Supply + "<br>" +
                "Items Available: " + data[release][skin].Items_Available + "<br>" +
                "EcoSim Total: " + data[release][skin].EcoSim_Total + "<br>" +
                "EcoSim Drop Chance: " + data[release][skin].EcoSim_Drop_Chance + "<br>" +
                "Base Item Required: " + data[release][skin].Base_Item_Required + "<br>" +
                "Customisation: " + data[release][skin].Customisation + "<br>" +
                "Can Be Resold: " + data[release][skin].Can_Be_Resold + "<br>" +
                "Future Price Reduction: " + data[release][skin].Future_Price_Reduction + "<br>" +
                "Realeasing Price: "+ data[release][skin].Price + "<br>";
                infoSkins.appendChild(paragraphe);


            }
        }
        console.log("./Skins/" + data[release][skin].Image);
        
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


