hello world
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="100" viewBox="0 0 400 100">
  <style>
    @keyframes draw {
      from {
        stroke-dashoffset: 100%;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
  </style>
  <rect width="100%" height="100%" fill="transparent" />
  <text x="50%" y="50%" font-size="30" font-family="cursive" text-anchor="middle" dominant-baseline="middle" fill="black">
    <tspan>
      <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="1" from="100%" to="0" fill="freeze" begin="0s" values="100%;0%" keyTimes="0;1" keySplines="0.5 0 0.5 1" calcMode="spline" keyPoints="0;1" id="animate-text"></animate>
      Bienvenue
    </tspan>
  </text>
</svg>