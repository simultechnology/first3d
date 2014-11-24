(function () {

  var width = 500, height = 300, cube = [], count = 500, i, cubeSize;

  // scene
  var scene = new THREE.Scene();

  for (i = 0; i < count; i++) {
    cubeSize = r(50);
    // mesh
    var geometry = new THREE.CubeGeometry(cubeSize, cubeSize, cubeSize);
    //var material = new THREE.MeshBasicMaterial({color: 0xff0000});
    var material = new THREE.MeshLambertMaterial(
        {color: 'rgb(' + r(255) + ',' + r(255) + ',' + r(255) + ')'}
    );
    cube[i] = new THREE.Mesh(geometry, material);
    cube[i].position.set(0, 50 + r(200), 0);
    cube[i].castShadow = true;
    scene.add(cube[i]);
  }

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
  //camera.lookAt(cube.position);

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
    for (i = 0; i < count; i++) {
      cube[i].rotation.x += i * Math.PI / 180;
      cube[i].rotation.y += i * Math.PI / 180;
      cube[i].rotation.z += i * Math.PI / 180;

      cube[i].position.x = Math.sin(new Date().getTime() / 200 + i) * 100;
      if (i % 2 === 0) {
        cube[i].position.z = Math.cos(new Date().getTime() / 200 + i) * 100;
      } else {
        cube[i].position.y = Math.cos(new Date().getTime() / 200 + i) * 100;
      }

    }
    renderer.render(scene, camera);
    controls.update();
  }
  render();

  function r(n) {
    return Math.floor(Math.random() * (n + 1));
  }

}());
