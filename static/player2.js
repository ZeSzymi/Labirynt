function Play2() {

    var model;
    var container = new THREE.Object3D();
  
   
    var loader = new THREE.JSONLoader();
    loader.load("body.js", function (geometry, mat) {
        geometry.computeMorphNormals();

        //mat.morphNormals = true;

        var mat = new THREE.MeshPhongMaterial(
                   {
                       map: THREE.ImageUtils.loadTexture("sposbody.png"),
                       morphTargets: true, //konieczne do animacji
                       morphNormals: true, //konieczne animacji
                       specular: 0xffffff,
                       shininess: 30,
                       shading: THREE.SmoothShading,
                       vertexColors: THREE.FaceColors
                   });

        //mesh dla modelu musi być typu MorphAnimMesh

        meshModel3 = new THREE.MorphAnimMesh(geometry, mat);
        meshModel3.name = "name";
        meshModel3.rotation.y = Math.PI/2 * 1; // ustaw obrót modelu
        meshModel3.scale.set(0.5, 0.5,0.5)// ustaw skalę modelu
        meshModel3.position.set(0, 0, 0)
        //

        container.add(meshModel3);

        meshModel3.parseAnimations();

        var tablica = [];
        var i = 0;
        var wysokosc = 10;


        for (var key in meshModel3.geometry.animations) {
            if (key === 'length' || !meshModel3.geometry.animations.hasOwnProperty(key)) continue;
            tablica.push(key);
            console.log(key)
        }
        meshModel3.playAnimation(tablica[1], 10);

        var clock = new THREE.Clock();

        //aktualizacja wyglądu animacji
        setInterval(function () {
            var delta = clock.getDelta();
            if (meshModel3 != null) {
                meshModel3.updateAnimation(delta * 1000);
            }
        }, 10)
      

    });

    this.getPlayer2 = function () {
        return container;
    }
}