var dataTable = `<div class="w3-container" >
<table id="myTable" class="w3-table w3-striped w3-responsive">
  <thead>
    <tr>
      <th>avrid</th>
      <th>avpathid</th>
      <th>avobsdate</th>
      <th>avobstime</th>
      <th>avobserverid</th>
      <th>avtype</th>
      <th>avtriggertyp</th>
      <th>avcomment</th>
    </tr>
  </thead>
  <tbody> `


for (let i = 0; i < 20; i++) {
  dataTable += `
    <tr>
      <td>1</td>
      <td>SHED10</td>
      <td>2012-03-26</td>
      <td>12:45:00</td>
      <td>stein_01</td>
      <td>WS</td>
      <td>5</td>
      <td>Wet slab released on SE aspect @ 5400 feet (1636 m) elevation. Debris ran 2/3rds path to at least 4,600
        feet (1394 m) elevation. </td>

    </tr> 
    `
}


dataTable += `
  </tbody>
</table>
</div> `

document.getElementById("dataTable").innerHTML = dataTable

$(document).ready(function () {
  $('#myTable').DataTable();
});