(function () {

  var width = 500, height = 300;

  // scene
  var scene = new THREE.Scene();

  // mesh
  var geometry = new THREE.CubeGeometry(50, 50, 50);
  //var material = new THREE.MeshBasicMaterial({color: 0xff0000});
  var material = new THREE.MeshLambertMaterial({color: 0xff0000});
  var cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, 0);
  scene.add(cube);

  var sGeometry = new THREE.SphereGeometry(30);
  //var material = new THREE.MeshBasicMaterial({color: 0xff0000});
  var sphMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
  var sphere = new THREE.Mesh(sGeometry, sphMaterial);
  sphere.position.set(100, 100, 100);
  scene.add(sphere);

  // camera
  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(200, 100, 550);
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
  scene.add(light);
  var ambient = new THREE.AmbientLight(0x5500000);
  scene.add(ambient);

  // rendering
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setClearColor(0xeeeeee, 1);
  document.getElementById('stage').appendChild(renderer.domElement);
  renderer.render(scene, camera);

}());
