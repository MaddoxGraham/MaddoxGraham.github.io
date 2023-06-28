var faceSection = document.getElementById("face-section");
var face = document.getElementById("face");
var nose = document.getElementById("nose");

faceSection.addEventListener("mousemove", function(event) {
  var sectionWidth = faceSection.offsetWidth;
  var sectionX = faceSection.getBoundingClientRect().left;

  var mouseX = event.clientX;

  // Vérifier si la souris est dans la section du visage
  if (mouseX >= sectionX && mouseX <= sectionX + sectionWidth) {
    var centerX = face.offsetWidth / 2;
    var centerY = face.offsetHeight / 2;

    var faceX = face.getBoundingClientRect().left;

    var faceMouseX = mouseX - faceX;
    var angle = -30 + (faceMouseX / face.offsetWidth) * 60; // Angle d'inclinaison entre -30 et 30 degrés

    nose.style.transform = "rotate(" + angle + "deg)";
  }
});
