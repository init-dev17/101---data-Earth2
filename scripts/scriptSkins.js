

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
                imgBtn.setAttribute("onclick",`window.open('${data[release][skin].Video}');`);

                const img = document.createElement("img");
                img.src = "./assets/Skins/" + data[release][skin].Image;

                const infosSkins = document.createElement("div");
                infosSkins.classList.add("infos-skins");

                const paragraphe = document.createElement("span");
                

                skins.appendChild(element);
                element.appendChild(imgSkins);
                imgSkins.appendChild(img);
                
                
                element.appendChild(infosSkins);
                // paragraphe.innerText = "Skin Name: " + data[release][skin].Skin_Name;
                paragraphe.innerHTML = "<u>Skin Name</u>: " + data[release][skin].Skin_Name + "<br>" + "<br>" +
                "<u>Type</u>: " + data[release][skin].Type + "<br>" +
                "<u>Description</u>: " + data[release][skin].Description + "<br>" +
                "<u>Total Supply</u>: " + data[release][skin].Total_Supply + "<br>" +
                "<u>Items Available</u>: " + data[release][skin].Items_Available + "<br>" +
                "<u>EcoSim Total</u>: " + data[release][skin].EcoSim_Total + "<br>" +
                "<u>EcoSim Drop Chance</u>: " + data[release][skin].EcoSim_Drop_Chance + "<br>" +
                "<u>Base Item Required</u>: " + data[release][skin].Base_Item_Required + "<br>" +
                "<u>Customisation</u>: " + data[release][skin].Customisation + "<br>" +
                "<u>Can Be Resold</u>: " + data[release][skin].Can_Be_Resold + "<br>" +
                "<u>Future Price Reduction</u>: " + data[release][skin].Future_Price_Reduction + "<br>" + "<br>" +
                "<u>Release Date</u>: "+ data[release][skin].Release_Date + "<br>" +
                "<u>Releasing Price</u>: "+ data[release][skin].Price + "<br>";
                infosSkins.appendChild(paragraphe);
                infosSkins.appendChild(imgBtn);

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


