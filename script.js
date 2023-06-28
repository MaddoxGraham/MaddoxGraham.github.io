var face = document.getElementById("face");

face.addEventListener("mousemove", function(event) {
  var centerX = face.offsetLeft + face.offsetWidth / 2;
  var centerY = face.offsetTop + face.offsetHeight / 2;

  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var angle = Math.atan2(mouseY - centerY, mouseX - centerX);
  var angleDeg = angle * (180 / Math.PI);

  var nose = document.getElementById("nose");
  nose.style.transform = "rotate(" + angleDeg + "deg)";
});