(function () {

  var width = 500, height = 300;

  // scene
  var scene = new THREE.Scene();

  // mesh
  var geometry = new THREE.CubeGeometry(50, 50, 50);
  var material = new THREE.MeshBasicMaterial({color: 0xff0000});
  var cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, 0);
  scene.add(cube);

  // light

  // camera
  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(200, 100, 500);
  //camera.position.x = 0;
  //camera.position = new THREE.Vector3(200, 100, 500);
  camera.lookAt(cube.position);

  // rendering
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setClearColor(0xeeeeee, 1);
  document.getElementById('stage').appendChild(renderer.domElement);
  renderer.render(scene, camera);

}());
