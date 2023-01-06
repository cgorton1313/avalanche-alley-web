let sideHTML= `<nav class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left" id="mySidebar">
    <a href="javascript:void(0)" onclick="w3_close()"
      class="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large" title="Close Menu">
      <i class="fa fa-remove"></i>
    </a>
    <h4 class="w3-bar-item w3-monospace w3-text-blue"><b>Menu</b></h4>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="#">Study Plot Data</a>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="#">Field Observations</a>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="#">Snow Profiles</a>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="#">Avalanche Observations</a>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="#">Weather Obervations</a>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="#">Maps</a>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="#">Videos</a>
  </nav>`
  document.getElementById("sidebar").innerHTML = sideHtml
