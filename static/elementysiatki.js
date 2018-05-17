function elementysiatki() {
    var container = new THREE.Object3D();
    var lineMaterial = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
    var mat = new THREE.LineBasicMaterial({ color: 0x2A8470 });
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0, 0, 0));
    geometry.vertices.push(new THREE.Vector3(50, 0, 0));
    geometry.vertices.push(new THREE.Vector3(50, 0, 50));
    geometry.vertices.push(new THREE.Vector3(0, 0, 50));
    geometry.vertices.push(new THREE.Vector3(0, 0, 0));
    var line = new THREE.Line(geometry, lineMaterial);
    var geometry1 = new THREE.PlaneGeometry(49, 49, 49);
    var plane = new THREE.Mesh(geometry1, mat);
    plane.position.set(25, 0, 25);
    plane.rotation.x = -Math.PI / 2
    container.add(plane);
    plane.name = "plane";
    container.add(line);
    
    
    this.getElementy = function () {
        return container;
    }

}
