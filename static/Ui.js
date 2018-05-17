/*
    UI - obsługa interfejsu użytkownika
*/
function Ui() {
    /*
    
    document.getElementById("bt1")
                    .addEventListener("click", function () {
                        game.setTest(12);

                    })

    document.getElementById("bt2")
                .addEventListener("click", function () {
                    alert("pobieram zmienną test z klasy Game: " + game.getTest());

                })

    document.getElementById("bt3")
                .addEventListener("click", function () {
                    net.sendData();

                })
                */
    
    div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = "0px";
    div.style.top = "0px";
    div.style.width = "100vw";
    div.style.height = "100vh";
    div.style.backgroundColor = "#61656B"
    div.id = "calosc"
    document.body.appendChild(div);

    div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = "40vw";
    div.style.top = "30vh";
    div.style.width = "20vw";
    div.style.height = "10vh";
    div.style.backgroundColor = "#2F5C9E"
    div.style.border = "2px solid black"
    div.style.paddingTop = "3vh"
    div.id = "graj"
    div.style.fontSize = "3vw"
    div.style.textAlign = "center"
    div.innerHTML = "Graj"
    document.body.appendChild(div);

    div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = "40vw";
    div.style.top = "45vh";
    div.style.width = "20vw";
    div.style.height = "10vh";
    div.style.textAlign = "center"
    div.style.fontSize = "3vw"
    div.style.backgroundColor = "#2F5C9E"
    div.style.border = "2px solid black"
    div.style.paddingTop = "3vh"
    div.id = "pomoc"
    div.innerHTML = "Pomoc"
    div.onclick = function () {
        alert("Sterowanie: W,A,D - ruch kamery, LPM - aktywacja przycisków, Z,X - zmiana kamery")
    }
    document.body.appendChild(div);

   
}
