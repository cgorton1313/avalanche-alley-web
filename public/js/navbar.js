let navHTML=` 
  <div class="w3-bar w3-blue w3-top w3-left-align w3-large ">
    <a class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1" href="javascript:void(0)" onclick="w3_open()"><i class="fa fa-bars"></i></a>
    <a href="index.html" class="w3-bar-item w3-button w3-monospace w3-blue w3-hover-white">Home</a>
    <a href="#" class="w3-bar-item w3-button w3-monospace w3-hide-small w3-hover-white">Info</a>
    <a href="#" class="w3-bar-item w3-button w3-monospace w3-hide-small w3-hover-white" href="weatherLinks.html">Weather Links</a>
    <a href="observations.HTML" class="w3-bar-item w3-button w3-monospace w3-hide-small w3-hover-white">Observations</a>
    <a href="#" class="w3-bar-item w3-button w3-monospace w3-hide-small w3-hover-white">About Us</a>
  </div>
`
document.getElementById("navbar").innerHTML = navHTML
