/// <reference path="Klocek.js" />
/// <reference path="Klocek.js" />

/*
    klasa Game
*/
var test = 10;
var plansza;
var scene;
var camera;
var renderer;
var geometry;
var material;
var mesh;
var mesh2;
var mesh3;
var axis;
var stan = 0;
var kolor;
var istnienie = 0;
var rot = 0;
var ex = 50;
var stanchodzenia = 0;
var kamera2 = 0;
var stanemit = 0;
var osoba;
var player
var player2
var p
var stanchodzenia1 = 0;
var tab = [];
function Main() {
    osoba = net.sendData();
    p = new Plansza();
    player = new Play();
    player2 = new Play2();
    console.log(osoba)
        init();
        
    
        

        /*
            funkcje publiczne możliwe do wywołania z innych klas
        */



}

function init() {
   
    if (osoba != 2) {
    var client = io();




    scene = new THREE.Scene();

    //kamera perspektywiczna - przeczytaj dokładnie objaśnienia w komentarzach



    //renderer wykorzystujący WebGL - działa dość stabilnie na wszystkich najnowszych przeglądarkach
    //zarówno desktopowych jak mobilnych

    renderer = new THREE.WebGLRenderer();

    // kolor tła - uwaga na prefix 0x a nie #

    renderer.setClearColor(0x000000);

    //ustalenie rozmiarów renderowanego okna w px (szer, wys)

    renderer.setSize(window.innerWidth, window.innerHeight);

    //geometria - obiekt NIE wyświetlany na scenie, ale stanowiący strukturę, która jest 
    //dodawana do kolejnego obiektu - przeczytaj w dokumentacji jego parametry:


    var axis = new THREE.AxisHelper(300);
    scene.add(axis);




    //materiał - typu kolor

    //mesh - obiekt wyświetlany na scenie

    //dodanie renderera do diva

    document.getElementById("div1").appendChild(renderer.domElement);


    //pozycja kamery - tu zobacz układ współrzędnych THREEJS:




    renderer.autoClear = false;

    camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -50000, 50000);
    camera.position.x = 200;
    camera.position.y = 100;
    camera.position.z = 200;

    camera.lookAt(axis.position);
    //nakierowanie kamery na punkt (0,0,0) w przestrzeni

    //kluczowy element - animacja
    var plansza = p.getPlansza();
    var zmiana;
    var zmiana2;
    var k = 0;
    for (il = 0; il < plansza.children.length; il++) {
        if (plansza.children[il].name == "sciana" || plansza.children[il].name == "scianaz" || plansza.children[il].name == "scianaz1") {
            tab[k] = plansza.children[il];
            if (plansza.children[il].name == "scianaz") {
                zmiana = plansza.children[il];
            }
            else if (plansza.children[il].name == "scianaz1") {
                zmiana2 = plansza.children[il];
            }
            k++;
        }
        
    }
    var gracz = player.getPlayer();
    var gracz2 = player2.getPlayer2();
    scene.add(gracz2)
    scene.add(gracz);
    scene.add(plansza);
    console.log(osoba)
    if (osoba == 0) { 
        gracz.position.set(475, 100, 125)
        gracz2.position.set(475, 100, 925)
    } else if (osoba == 1) {
        gracz.position.set(525, 100, 925)
        gracz2.position.set(475, 100, 125)
    }
    
    document.addEventListener("keyup", up)
    function up() {

        stanchodzenia = 0
        stanchodzenia1 = 0;
    }

    document.addEventListener("mousedown", onMouseDown, false);

    var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
    var mouseVector = new THREE.Vector2() // wektor (x,y) wykorzystany bedzie do określenie pozycji myszy na ekranie

    //obsługa funkcji onMouseDown

    function onMouseDown(event) {
        if (camera2 != null) {

            //pozycja myszy zostaje przeliczona na wartości 0-1, wymagane przez raycaster

            mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;


            // szukamy punktów wspólnych "promienia" i obiektu 3D 

            raycaster.setFromCamera(mouseVector, camera2);

            //intersects - tablica obiektów w które "trafia" nasz "promień" wysyłany z kamery

            var intersects = raycaster.intersectObjects(scene.children, true);

            // console.log(intersects.length)

            //jeśli długość tablicy > 0 oznacza to że "trafilismy" w obiekt 3D czyli "kliknelismy" go

            if (intersects.length > 0) {
                console.log(intersects[0].object.name)
                if (intersects[0].object.name == "przycisk1") {
                    zmiana.position.set(0, 0, 0)
                    client.emit("zmiana", {
                        zn:intersects[0].object.name,
                        zx: zmiana.position.x,
                        zy: zmiana.position.y,
                        zz: zmiana.position.z
                    })
                } else if (intersects[0].object.name == "przycisk2") {
                    zmiana2.position.set(0, 0, 0)
                    client.emit("zmiana", {
                        zn: intersects[0].object.name,
                        zx: zmiana2.position.x,
                        zy: zmiana2.position.y,
                        zz: zmiana2.position.z
                    })
                } else if (intersects[0].object.name == "wygrana") {
                    zmiana2.position.set(0, 0, 0)
                    var div = document.createElement("div")
                    div.style.position = "absolute";
                    div.style.left = "0px"
                    div.style.top = "0px"
                    div.style.width = "100vw"
                    div.style.height = "100vh"
                    div.style.backgroundColor = "#076B00"
                    div.innerHTML = "Gratulacje! Wygrałeś."
                    div.style.fontSize = "13vw"
                    div.style.textAlign = "center"
                    document.body.appendChild(div);
                    client.emit("zmiana", {
                        zn: intersects[0].object.name,
                    })
                }
                
            }
        }

    }

    var camera2;
    var rotacja = 0;
    var rotacjakamery = 2;
    var map = []; // Or you could call it "key"
    onkeydown = onkeyup = function(e){
        e = e || event; // to deal with IE
        map[e.keyCode] = e.type == 'keydown';
        /*insert conditional here*/
        console.log(map[e.keyCode])

        if (map[87]) {
            stanchodzenia = 1
        } else if (map[83] ) {
            stanchodzenia = 2
        }
        if (map[68]) {
            stanchodzenia1 = 3
        } else if (map[65]) {
            stanchodzenia1 = 4
        } else if (map[90]) {
            camera.remove();
            camera2 = new THREE.PerspectiveCamera(
              45, // kąt patrzenia kamery (FOV - field of view)
        4 / 3, // proporcje widoku
        0.1, // min renderowana odległość
        10000 // max renderowana odległość
        );
            camera2.rotation.y = Math.PI / 2 * rotacjakamery
            kamera2 = 1;

        } else if (map[88]) {
            camera2.remove();
            kamera2 = 0;
        }  
    };
    var pointLight = new THREE.PointLight(0xFFE70F, 1, 10000);
    pointLight.position.set(gracz.position.x, 165, gracz.position.z);
    scene.add(pointLight);
    var pointLight2 = new THREE.PointLight(0xFFE70F, 1, 10000);
    pointLight2.position.set(gracz2.position.x, 165, gracz2.position.z);
    scene.add(pointLight2);
    var sphereSize = 10;
    var pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
    scene.add(pointLightHelper);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    /////
    function animateScene() {

        for (var i = 0; i < tab.length; i++) {
            if (gracz.position.distanceTo(tab[i].position) < 45) {
                stanchodzenia = 0;
                gracz.translateZ(-1)
                console.log("kolizja");

            }

        }


        if (kamera2 == 1) {
            camera2.aspect = 4 / 3; // aspect powinien wynikać z proporcji polowy ekranu
            camera2.updateProjectionMatrix();

            renderer.render(scene, camera2);

            camera2.position.x = gracz.position.x;
            camera2.position.y = gracz.position.y + 40;
            camera2.position.z = gracz.position.z;


        } else if (kamera2 == 0) {
            camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -50000, 50000);
            camera.position.x = 200;
            camera.position.y = 100;
            camera.position.z = 200;
            camera.rotation.y = 0;
            camera.lookAt(axis.position);
            renderer.render(scene, camera);

        }

        if (stanchodzenia == 1) {
            gracz.translateZ(2)
            pointLight.position.set(gracz.position.x, 165, gracz.position.z);
        } 
        if (stanchodzenia1 == 4) {
            stanchodzenia = 4;
            rotacja += 0.02
            rotacjakamery += 0.02;
            gracz.rotation.y = Math.PI / 2 * rotacja;
            if (camera2 != null) {

                camera2.rotation.y = Math.PI / 2 * rotacjakamery
            }

        } else if (stanchodzenia1 == 3) {
            rotacja -= 0.02
            rotacjakamery -= 0.02;
            gracz.rotation.y = Math.PI / 2 * rotacja;
            if (camera2 != null) {
                camera2.rotation.y = Math.PI / 2 * rotacjakamery
            }
        }


        /*  if (gracz != null) {
              console.log(gracz.children)
              gracz.children.updateAnimation(delta * 1000);
          }
          */
        //w tym miejscu ustalamy wszelkie zmiany w projekcie (obrót, skalę, położenie obiektów)

        //zmieniająca się wartość czyli rotacja obiektu


        //wykonywanie funkcji bez końca ok 60 fps jeśli pozwala na to wydajność maszyny

        requestAnimationFrame(animateScene);

        //ciągłe renderowanie / wyświetlanie widoku sceny nasza kamerą

        client.emit("gracz", {
            posx: gracz.position.x,
            posy: gracz.position.y,
            posz: gracz.position.z,
            rotx: gracz.rotation.x,
            roty: gracz.rotation.y,
            rotz: gracz.rotation.z
        })

        client.on("gracz", function (data) {
            gracz2.position.x = data.posx;
            gracz2.position.y = data.posy;
            gracz2.position.z = data.posz;
            gracz2.rotation.x = data.rotx;
            gracz2.rotation.y = data.roty;
            gracz2.rotation.z = data.rotz;
            pointLight2.position.set(gracz2.position.x, 165, gracz2.position.z);
        })
    }

    client.on("zmiana", function (data) {
        if (data.zn == "przycisk1") {
            zmiana.position.x = data.zx;
            zmiana.position.y = data.zy;
            zmiana.position.z = data.zz;
        } else if (data.zn == "przycisk2") {
            zmiana2.position.x = data.zx;
            zmiana2.position.y = data.zy;
            zmiana2.position.z = data.zz;
        } else if (data.zn == "wygrana") {
            var div = document.createElement("div")
            div.style.position = "absolute";
            div.style.left = "0px"
            div.style.top = "0px"
            div.style.width = "100vw"
            div.style.height = "100vh"
            div.style.backgroundColor = "#740711"
            div.innerHTML = "Przegrałeś!";
            div.style.fontSize = "13vw"
            div.style.textAlign = "center"
            document.body.appendChild(div);
        }
    })

    //na koniec jednokrotne wykonanie powyższej funkcji

    animateScene();
    } else {
        console.log("jest 2 graczy")
        alert("jest 2 graczy!");
    }
}
