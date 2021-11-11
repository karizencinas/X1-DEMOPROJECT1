var container;

var camera, scene, renderer;

var video, texture, planeGeometry,cube_mat, cube_geo ,cube_mesh, geometry, material, mesh, plane, sphere;




    
raycaster = new THREE.Raycaster();
mouse = new THREE.Vector3( 20, 20, 20 );

        init();
        animate();
        
        
    
    function init() {

        

        
        
        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 5000 );
        camera.position.set(50, 0, 0);
        scene = new THREE.Scene();
    

    
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        
        
        


        //sphere
        texture = new THREE.TextureLoader().load('Exterior_Obs2_360.jpg');
        texture.wrapS = THREE.RepeatWrapping  // <-- remove mirror effect
        texture.repeat.x = -1 // <-- remove mirror effect 
        geometry = new THREE.SphereGeometry( 500, 500, 500 );
        material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
        sphere = new THREE.Mesh( geometry, material);
        sphere.position.set(0, 0, 0)
        scene.add( sphere );

        //cube1
        cubetex = new THREE.TextureLoader().load('Click2.png');
        geometry = new THREE.CircleGeometry( 12, 128  );
        material = new THREE.MeshBasicMaterial( {map:cubetex, color: 0xffffff} );
        cube = new THREE.Mesh( geometry, material );
        cube.position.set(-1, 0, -450)
        cube.lookAt(0, 0, 0)
        scene.add( cube );

    
     control = new THREE.OrbitControls(camera, renderer.domElement)
     

    }

        
    function onMouseDown( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
       
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [cube], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        closeMe()
        }
    
    }
    
    
    function animate() {
        requestAnimationFrame( animate );
        render();
    }

    function render() {
        renderer.render( scene, camera );
    }
    
    window.addEventListener( 'pointerdown', onMouseDown, false );
    
    window.requestAnimationFrame(render);

    function closeMe()
{
    location.replace("index.html")
}
