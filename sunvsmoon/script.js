// Visa en bild på en sol
let sunvsmoon = document.createElement("img");
sunvsmoon.id = "sunvsmoon";
sunvsmoon.src = "img/sun.jpg";

document.body.append(sunvsmoon);

// Låt besökaren klicka på bilden
sunvsmoon.addEventListener("click", () => {
    console.log("click på knapp");

    console.log("state på src", sunvsmoon.getAttribute("src"));

    // Är det en sol de har klickat på, byt bild till en måne
    if(sunvsmoon.getAttribute("src") === "img/sun.jpg") {
        sunvsmoon.setAttribute("src", "img/moon.jpg")
    } else {
        
         // Är det en måne de har klickat på byt bild till en sol
         sunvsmoon.setAttribute("src", "img/sun.jpg")
    }
})



