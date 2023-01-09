getAvyObs()

async function getAvyObs() {
  let repsonse = await fetch('./avy-obs')
  let avyObsArray = await repsonse.json()

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


  for (let i = 0; i < avyObsArray.length; i++) {
    dataTable += `
        <tr>
          <td>${avyObsArray[i].avrid}</td>
          <td>${avyObsArray[i].avpathid}</td>
          <td>${avyObsArray[i].avobsdata}</td>
          <td>${avyObsArray[i].avobstime}</td>
          <td>${avyObsArray[i].avobserverid}</td>
          <td>${avyObsArray[i].avtype}</td>
          <td>${avyObsArray[i].avtriggertyp}</td>
          <td>${avyObsArray[i].avcomment}</td>
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
}




