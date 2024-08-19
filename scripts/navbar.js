


const burgerBtn = document.getElementById("burgerBtn");
console.log(burgerBtn);

const iBurgerBtn = document.getElementById("iBurgerBtn");
console.log(iBurgerBtn);

const burgerMenu = document.getElementById("burgerMenu");
console.log(burgerMenu);

const menu = document.getElementById("menu");
console.log(menu);


burgerBtn.addEventListener("click", () => {

// Si la classe .active n'est pas associé à #burgerBtn, l'ajouter, sinon la retirer
    menu.classList.toggle("active"); // Ajoute la classe .active au span #burgerBtn
    //console.log("Click sur burgerMenu");
    
    // Changer l'icone : <i class="fa-solid fa-bars">
    // en <i class="fa-solid fa-xmark"></i>
    // si active et inversement
    if (menu.classList.contains("active")) {
        // iBurgerBtn.classList.remove("fa-bars");
        // iBurgerBtn.classList.add("fa-xmark");
        iBurgerBtn.classList.replace("fa-bars","fa-xmark");
    } else{
        iBurgerBtn.classList.replace("fa-xmark","fa-bars");
    };
    



    //menu.classList.remove("active"); // Ajoute la classe .active au span #burgerBtn

});


