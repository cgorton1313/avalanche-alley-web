var x = ` <div class="w3-container" >
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
  <tbody>
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
    <tr>
      <td>2</td>
      <td>PATH1163</td>
      <td>2012-03-16</td>
      <td>08:30:00</td>
      <td>stein_01</td>
      <td>U</td>
      <td>5</td>
      <td>Wet debris ran 2/3 path in main path to 4700 feet (1424 m) elevation. Upper SZ obscured. </td>
    </tr>
    <tr>
      <td>3</td>
      <td>CURLY</td>
      <td>2012-03-16</td>
      <td>08:34:00</td>
      <td>stein_01</td>
      <td>U</td>
      <td>5</td>
      <td>Terminus at canyon floor elevation. Debris wet and relatively small amount.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>SHED10</td>
      <td>2012-03-10</td>
      <td>14:50:00</td>
      <td>stein_01</td>
      <td>WL</td>
      <td>5</td>
      <td>---</td>
    </tr>
    <tr>
      <td>5</td>
      <td>INFINITY</td>
      <td>2012-03-10</td>
      <td>14:54:00</td>
      <td>stein_01</td>
      <td>L</td>
      <td>5</td>
      <td>---</td>
    </tr>
  </tbody>
</table>
</div> `

document.getElementById("dataTable").innerHTML=x