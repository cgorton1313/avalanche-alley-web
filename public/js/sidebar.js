// Get the Sidebar
let mySidebar = document.getElementById('sidebar');

// Get the DIV with overlay effect
let overlayBg = document.getElementById('overlay');

let sideHTML = `
    <a href="javascript:void(0)" onclick="w3_close()"
      class="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large" title="Close Menu">
      <i class="fa fa-remove"></i>
    </a>
    <h4 class="w3-bar-item w3-monospace w3-text-blue"><b>Menu</b></h4>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="#">Study Plot Data</a>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="#">Field Observations</a>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="#">Snow Profiles</a>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="observations.html">Avalanche Observations</a>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="weatherLinks.html">Weather Observations</a>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="maps.html">Maps</a>
    <a class="w3-bar-item w3-button w3-monospace w3-hover-black w3-text-blue" href="#">Videos</a>
`

mySidebar.innerHTML = sideHTML

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
