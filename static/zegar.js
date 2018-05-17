function Zegar() {

    var canvas, uklad;
    var zegarRadius = 65; //rozmiar generowanych elementów
    var sekundy = 0;
    var kontrolka = false;	//blokuje wielokrotne przyciśnięcie
    var licznik = 0;
    var minutnik = 0;

    // usuwanie starych wskazówek :
    function czyszczenie() {
        uklad.clearRect(0, 0, uklad.canvas.width, uklad.canvas.height);
    }

    function drawScene() {
        czyszczenie();

        // zmiana czasu
        sekundy++;
        var minuty = sekundy / 60;


        if (sekundy == 60)
            minutnik++
        licznik.innerHTML = minutnik + ':' + sekundy % 60;

        // generowanie
        uklad.save();

        // plansza

        uklad.translate(canvas.width / 2, canvas.height / 2);
        uklad.beginPath();

        // numery na planszy
        uklad.font = '12px Arial ';
        uklad.fillStyle = 'white';
        uklad.textAlign = 'center';
        uklad.textBaseline = 'middle';
        for (var n = 5; n <= 60; n += 5) {
            var wskazówka = (n - 15) * (Math.PI * 2) / 60;
            var x = zegarRadius * 0.65 * Math.cos(wskazówka);
            var y = zegarRadius * 0.65 * Math.sin(wskazówka);
            uklad.fillText(n, x, y);
        }

        // minuty
        uklad.save();
        var wskazówka = (minuty - 15) * 2 * Math.PI / 60;
        uklad.rotate(wskazówka);
        uklad.beginPath();
        uklad.moveTo(-15, -4);
        uklad.lineTo(-15, 4);
        uklad.lineTo(zegarRadius * 0.8, 1);
        uklad.lineTo(zegarRadius * 0.8, -1);
        uklad.fillStyle = '#f00';
        uklad.fill();
        uklad.restore();

        // sekundy
        uklad.save();
        var wskazówka = (sekundy - 15) * 2 * Math.PI / 60;
        uklad.rotate(wskazówka);
        uklad.beginPath();
        uklad.moveTo(-15, -3);
        uklad.lineTo(-15, 3);
        uklad.lineTo(zegarRadius * 0.9, 1);
        uklad.lineTo(zegarRadius * 0.9, -1);
        uklad.fillStyle = '#0f0';
        uklad.fill();
        uklad.restore();

        uklad.restore();
    }

    // initialization
    function start() {
        if (kontrolka == false) {
            canvas = document.getElementById('canvas');
            uklad = canvas.getContext('2d');
            setInterval(drawScene, 1000);

            kontrolka = true;
        }
    };
    start();
}