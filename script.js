// Récupérer le canvas
var canvas = document.getElementById("renderCanvas");

// Créer le moteur de rendu Babylon.js
var engine = new BABYLON.Engine(canvas, true);

// Créer une scène vide
var scene = new BABYLON.Scene(engine);

// Créer une caméra et la positionner
var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -10), scene);

// Cibler la caméra sur l'origine de la scène
camera.setTarget(BABYLON.Vector3.Zero());

BABYLON.SceneLoader.ImportMesh("", "asset/cube", "Placeholder_Cube_1.obj", scene, function (meshes) {
  // Le modèle a été chargé avec succès
  // Vous pouvez accéder aux meshes du modèle ici
  // Par exemple, vous pouvez appliquer une rotation ou une échelle à chaque mesh
});

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});