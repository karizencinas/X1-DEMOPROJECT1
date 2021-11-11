var container;

var camera, scene, renderer;

var video, texture, planeGeometry,cube_mat, cube_geo ,cube_mesh, geometry, material, mesh, plane, sphere;




    
raycaster = new THREE.Raycaster();
mouse = new THREE.Vector3( 20, 20, 20 );


        init();
        animate();
        
        
    
    function init() {

        

        
        
        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 100, 1000 );
        camera.position.set(1, 0, 0);
        scene = new THREE.Scene();
    

    
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        

        //sphere
        texture = new THREE.TextureLoader().load('Crossroad360.jpg');
        texture.wrapS = THREE.RepeatWrapping  // <-- remove mirror effect
        texture.repeat.x = -1 // <-- remove mirror effect 
        geometry = new THREE.SphereGeometry( 500, 500, 500 );
        material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
        sphere = new THREE.Mesh( geometry, material);
        sphere.position.set(0, 0, 0)
        scene.add( sphere );


        
        
        
        //cube1
        cubetex1 = new THREE.TextureLoader().load('Click2.png');
        geometry = new THREE.CircleGeometry( 12, 128 );
        material = new THREE.MeshBasicMaterial( {map:cubetex1, color: 0xffffff});
        cube1 = new THREE.Mesh( geometry, material );
        cube1.position.set(480, 0, -120)
        cube1.lookAt(0, 0, 0)
        scene.add( cube1 );

        //cube2
        cubetex2 = new THREE.TextureLoader().load('Click2.png');
        geometry = new THREE.CircleGeometry( 12, 128 );
        material = new THREE.MeshBasicMaterial( {map:cubetex2, color: 0xffffff} );
        cube2 = new THREE.Mesh( geometry, material );
        cube2.position.set(250, 0, -400)
        cube2.lookAt(0, 0, 0)
        scene.add( cube2 );

        //cube3
        cubetex3 = new THREE.TextureLoader().load('Click2.png');
        geometry = new THREE.CircleGeometry( 12, 128 );
        material = new THREE.MeshBasicMaterial( {map:cubetex3, color: 0xffffff} );
        cube3 = new THREE.Mesh( geometry, material );
        cube3.position.set(50, 0, -400)
        cube3.lookAt(0, 0, 0)
        scene.add( cube3 );

   
    
     control = new THREE.OrbitControls(camera, renderer.domElement);
   
     
    

    }

    
        
    function onMouseDown1( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [cube1], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        closeMe1()
        }
    
    }
    function onMouseDown2( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [cube2], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        closeMe2()
        }
    
    }

    function onMouseDown3( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [cube3], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        closeMe3()
        }
    
    }
    
    function animate() {
        requestAnimationFrame( animate );
        render();
    }

    function render() {
        renderer.render( scene, camera );
    }
    
    window.addEventListener( 'pointerdown', onMouseDown1, false );
    window.addEventListener( 'pointerdown', onMouseDown2, false );
    window.addEventListener( 'pointerdown', onMouseDown3, false );
    window.requestAnimationFrame(render);

    function closeMe1()
{
    location.replace("index2.html")
}
function closeMe2()
{
    location.replace("index3.html")
}
function closeMe3()
{
    location.replace("index4.html")
}


