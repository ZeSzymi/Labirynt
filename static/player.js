function Play() {

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

        meshModel = new THREE.MorphAnimMesh(geometry, mat);
        meshModel.name = "name";
        meshModel.rotation.y = Math.PI/2 * 1; // ustaw obrót modelu
        meshModel.scale.set(0.5, 0.5,0.5)// ustaw skalę modelu
        meshModel.position.set(0, 0, 0)
        //

        container.add(meshModel);

        meshModel.parseAnimations();

        var tablica = [];
        var i = 0;
        var wysokosc = 10;


        for (var key in meshModel.geometry.animations) {
            if (key === 'length' || !meshModel.geometry.animations.hasOwnProperty(key)) continue;
            tablica.push(key);
            console.log(key)
        }
        meshModel.playAnimation(tablica[1], 10);

        var clock = new THREE.Clock();

        //aktualizacja wyglądu animacji
        setInterval(function () {
            var delta = clock.getDelta();
            if (meshModel != null) {
                meshModel.updateAnimation(delta * 1000);
            }
        }, 10)
      

    });

    this.getPlayer = function () {
        return container;
    }
}