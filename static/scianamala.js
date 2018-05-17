function scianamala() {
    var mat = new THREE.MeshLambertMaterial({ color: 0x6E100D, overdraw: 0.5 });
    var mat2 = new THREE.MeshLambertMaterial({ color: 0x6E100D, overdraw: 0.5 });
    var geometry1 = new THREE.BoxGeometry(50, 50, 50, 1, 1, 1);
    var klocek = new THREE.Mesh(geometry1, mat);
    klocek.name = "sciana";
    this.getSciana = function () {
        return klocek;
    }
}
