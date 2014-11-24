(function () {

  var width = 500, height = 300;

  // scene
  var scene = new THREE.Scene();

  // mesh
  var geometry = new THREE.CubeGeometry(50, 50, 50);
  //var material = new THREE.MeshBasicMaterial({color: 0xff0000});
  var material = new THREE.MeshLambertMaterial({color: 0xff0000});
  var cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 50, 0);
  cube.castShadow = true;
  scene.add(cube);

  //var sGeometry = new THREE.SphereGeometry(30);
  ////var material = new THREE.MeshBasicMaterial({color: 0xff0000});
  //var sphMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
  //var sphere = new THREE.Mesh(sGeometry, sphMaterial);
  //sphere.position.set(100, 100, 100);
  //scene.add(sphere);

  var pGeometry = new THREE.PlaneGeometry(300, 300);
  //var material = new THREE.MeshBasicMaterial({color: 0xff0000});
  var pMaterial = new THREE.MeshLambertMaterial({
    color: 0x0096d6,
    side: THREE.DoubleSide
  });
  var plane = new THREE.Mesh(pGeometry, pMaterial);
  plane.receiveShadow = true;
  plane.position.set(0, 0, 0);
  plane.rotation.x = 90 * Math.PI / 180; // radian
  scene.add(plane);

  // camera
  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(200, 300, 550);
  //camera.position.x = 0;
  //camera.position = new THREE.Vector3(200, 100, 500);
  camera.lookAt(cube.position);

  // helper
  var axis = new THREE.AxisHelper(1000);
  axis.position.set(0, 0, 0);
  scene.add(axis);

  // light
  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 100, 30);
  light.castShadow = true;
  scene.add(light);
  var ambient = new THREE.AmbientLight(0x5500000);
  scene.add(ambient);

  // rendering
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setClearColor(0xeeeeee, 1);
  renderer.shadowMapEnabled = true;
  document.getElementById('stage').appendChild(renderer.domElement);

  // control
  var controls = new THREE.OrbitControls(camera, renderer.domElement);


  function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 1 * Math.PI / 180;
    cube.rotation.y += 1 * Math.PI / 180;
    cube.rotation.z += 1 * Math.PI / 180;

    cube.position.x = Math.sin(new Date().getTime() / 200) * 100;
    cube.position.z = Math.cos(new Date().getTime() / 200) * 100;

    renderer.render(scene, camera);
    controls.update();
  }
  render();


}());
