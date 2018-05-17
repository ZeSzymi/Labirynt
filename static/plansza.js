function Plansza() {
    /*
        funkcja publiczna możliwa do uruchomienia 
        z innych klas
    */
    var scene = new THREE.Object3D();
    for (var j = 0; j < 1000; j += 50) {
        for (var i = 0 ; i < 1000; i += 50) {
            var siatka = new elementysiatki().getElementy();
            siatka.position.set(i, 100, j);
            scene.add(siatka);
            istnienie = 1;

        }
    }
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 1
    sciana.position.set(425, 125, 25)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 1
    sciana.position.set(525, 125, 25)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 1
    sciana.position.set(475, 125, 25)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(525, 125, 75)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(425, 125, 75)


    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(425, 125, 175)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(475, 125, 175)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(525, 125, 175)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 175)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(375, 125, 175)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 25)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(625, 125, 25)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(675, 125, 25)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(625, 125, 125)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(675, 125, 125)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(775, 125, 125)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(775, 125, 175)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(775, 125, 225)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(725, 125, 225)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(725, 125, 25)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(775, 125, 25)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(825, 125, 25)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 25)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(925, 125, 25)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 25)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 75)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 125)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 175)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 225)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 275)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 325)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 325)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(825, 125, 325)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(775, 125, 325)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 275)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(675, 125, 275)




    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 125)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 175)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 225)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(625, 125, 275)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 275)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(525, 125, 275)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(475, 125, 275)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(425, 125, 275)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(325, 125, 275)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(325, 125, 225)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(325, 125, 325)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 225)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 375)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 425)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 475)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 525)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 575)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 625)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 675)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 725)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 775)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 825)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 875)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 925)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(975, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(925, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(825, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(775, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(725, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(675, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(625, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(425, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(375, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(325, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(275, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(225, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(175, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(125, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(75, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 975)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 925)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 875)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 825)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 775)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 725)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 675)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 625)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 575)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 525)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 475)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 425)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 375)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 325)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 275)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 225)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 175)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 125)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 75)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(25, 125, 25)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(75, 125, 25)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(125, 125, 25)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(175, 125, 25)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(225, 125, 25)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(275, 125, 25)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(325, 125, 25)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(375, 125, 25)
    /////////////////


    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.material = new THREE.MeshLambertMaterial({ color: 0x2047FF, overdraw: 0.5 });
    sciana.name = "wygrana";
    sciana.position.set(475, 125, 475)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(375, 125, 475)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(375, 125, 525)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(375, 125, 575)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.name = "scianaz1";
    sciana.position.set(425, 125, 575)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(475, 125, 575)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(525, 125, 575)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 575)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 525)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 475)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 425)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 375)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(525, 125, 375)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.name = "scianaz";
    sciana.position.set(475, 125, 375)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(425, 125, 375)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(375, 125, 425)
    /////////////////
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(475, 125, 975)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(525, 125, 975)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 975)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 975)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(475, 125, 925)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 925)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 925)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 825)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(525, 125, 825)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(475, 125, 825)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(425, 125, 825)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(625, 125, 825)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(675, 125, 875)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(725, 125, 875)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(775, 125, 875)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(825, 125, 875)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 875)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 775)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(925, 125, 775)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(775, 125, 775)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(725, 125, 775)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 675)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(775, 125, 675)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(675, 125, 725)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(625, 125, 725)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 725)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(525, 125, 725)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 625)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(725, 125, 625)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(675, 125, 625)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(625, 125, 575)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 575)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 525)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 475)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 425)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(875, 125, 375)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(775, 125, 475)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(775, 125, 425)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(775, 125, 375)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(725, 125, 525)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(675, 125, 475)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(625, 125, 475)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(625, 125, 375)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(625, 125, 325)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(675, 125, 325)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(475, 125, 625)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(475, 125, 675)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(625, 125, 625)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(575, 125, 625)
    ////////////////////
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(325, 125, 125)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(275, 125, 125)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(225, 125, 125)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(125, 125, 125)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(125, 125, 175)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(225, 125, 225)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(225, 125, 275)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(225, 125, 325)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(225, 125, 375)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(275, 125, 425)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(325, 125, 425)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(125, 125, 225)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(125, 125, 275)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(125, 125, 325)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(125, 125, 375)
    ////////////////
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(375, 125, 875)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(375, 125, 625)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(375, 125, 675)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(375, 125, 725)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(375, 125, 775)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(275, 125, 875)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(275, 125, 825)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(275, 125, 775)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(275, 125, 725)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(275, 125, 675)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(275, 125, 625)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(275, 125, 575)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(275, 125, 525)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(225, 125, 525)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(175, 125, 475)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(175, 125, 575)
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(175, 125, 625)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(175, 125, 675)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(175, 125, 725)

    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(125, 125, 775)
    //////
    var sciana = new scianamala().getSciana();
    scene.add(sciana);
    sciana.rotation.y = Math.PI / 2 * 2
    sciana.position.set(125, 125, 825)
    ////////
    var przycisk = new Przycisk().getSciana();
    scene.add(przycisk);
    przycisk.name = "przycisk1"
    przycisk.rotation.y = Math.PI / 2 * 2
    przycisk.position.set(600, 130, 430)

    var przycisk = new Przycisk().getSciana();
    scene.add(przycisk);
    przycisk.name = "przycisk2"
    przycisk.rotation.y = Math.PI / 2 * 2
    przycisk.position.set(200, 125, 530)
    /////////
    this.getPlansza = function () {
        return scene;
    }
}

