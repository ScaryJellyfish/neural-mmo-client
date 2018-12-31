function loadObj(objf, mtlf) {
    var container = new THREE.Object3D();
    var obj;

    function onMTLLoad( materials ) {
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials( materials );
        //objLoader.setPath( path );

        function onOBJLoad(object) {
           obj = object;
           obj.scale.x = 100;
           obj.scale.y = 100;
           obj.scale.z = 100;
           container.add(obj)
        }
        objLoader.load( objf, onOBJLoad);
    }

    var mtlLoader = new THREE.MTLLoader();
    //mtlLoader.setPath( path );
    mtlLoader.load( mtlf, onMTLLoad);
    return container
}
