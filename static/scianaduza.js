function Przycisk() {
    var mat = new THREE.MeshLambertMaterial({ color: 0x2047FF, overdraw: 0.5 });
    var geometry1 = new THREE.BoxGeometry(20, 20, 20, 1, 1, 1);
    var klocek = new THREE.Mesh(geometry1, mat);
    this.getSciana = function () {
        return klocek;
    }
}
