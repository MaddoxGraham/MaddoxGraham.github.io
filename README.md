<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="100" viewBox="0 0 400 100">
  <style>
    @keyframes draw {
      0% {
        stroke-dasharray: 0 220;
        stroke-dashoffset: 220;
      }
      100% {
        stroke-dasharray: 220 220;
        stroke-dashoffset: 0;
      }
    }
  </style>
  <rect width="100%" height="100%" fill="transparent" />
  <text x="50%" y="50%" font-size="30" font-family="cursive" text-anchor="middle" dominant-baseline="middle" fill="none" stroke="black" stroke-width="1">
    <tspan>
      <animate attributeName="stroke-dasharray" dur="2s" repeatCount="1" from="0 220" to="220 220" fill="freeze" begin="0s" keyTimes="0;1" keySplines="0.5 0 0.5 1" calcMode="spline" keyPoints="0;1" id="animate-dash"></animate>
      <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="1" from="220" to="0" fill="freeze" begin="0s" keyTimes="0;1" keySplines="0.5 0 0.5 1" calcMode="spline" keyPoints="0;1" id="animate-offset"></animate>
      Bienvenue
    </tspan>
  </text>
</svg>