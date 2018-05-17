/*
    klasa obsługująca komunikację Ajax - serwer
*/

function Net() {
    /*
        funkcja publiczna możliwa do uruchomienia
        z innych klas
    */
    var kto;
    document.getElementById("graj").onclick = function () {
        $.ajax({
            url: "http://localhost:3000/",
            data: { a: 0 },
            type: "POST",
            success: function (data) {
                console.log(data)
                kto = data;
                main = new Main();
            },
        });

        document.getElementById("calosc").remove()
        document.getElementById("graj").remove()
        document.getElementById("pomoc").remove()
    }

    this.sendData = function () {
        return kto;
    }

}
