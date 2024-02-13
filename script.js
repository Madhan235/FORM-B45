var container = document.createElement("div");
container.className = "container";
var Row = document.createElement("div");
Row.className = "row";
var Col = document.createElement("div");
Col.className = "col-lg-12 col-xl-4";
Col.id = "col1";
var Col2 = document.createElement("div");
Col2.className = "col-lg-12 col-xl-8";
Col2.id = "col2";

Row.append(Col, Col2);
container.append(Row);
document.body.append(container);

var form1 = document.getElementById("col1");
form1.innerHTML = `
 
<div class=form type=submit >
<h3 style=color:blue> Form Submission </h3>
<label> First Name </label><br>
<input type=text id=fname><br>
<label> Last Name </label><br> 
<input type=text id=lname><br>
<label> Address line 1: </label><br> 
<input type=text id=ad1><br>
<label> Address line 2: </label><br> 
<input type=text id=ad2 ><br>
<label> Pin </label><br> 
<input type=number id=pin ><br>
<label> Gender </label><br> 
<select class =form-select id=selected>
<option value=1>male</option>
<option value=2>Female</option>
<option value=3>Others</option>
</select>

<label><h4>Choice of food</h4>{must slect any 2 out of 5} </label><br>

<div class="form-check">
<input class="form-check-input" type="checkbox" value="South Indian" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
  South Indian
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="North Indian" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
  North Indian
</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Vegan" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Vegan
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Chinese" id="flexCheckDefault" >
  <label class="form-check-label" for="flexCheckDefault">
    Chinese
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Arabian" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Arabian
  </label>
</div>

<label> State </label><br>
<input type=text id=state ><br>

<label> Country </label><br>
<input type=text id=country><br>


<br>
<button type=button class="btn btn-primary" id="subtn" onclick=data()> Sumbit </button>

</div>
`;

var Tab = document.getElementById("col2");
Tab.innerHTML = `
 
<h3 style=color:blue> Form Table </h3>

<table class=table table-dark>
<tr>
<th>
First Name
</th>
<th>
Last Name
</th>
<th>
Adress line 1 :
</th>
<th>
Adress line 2 :
</th>
<th>
Pin
</th>
<th>
Gender
</th>
<th>
Choice of food
</th>
<th>
State
</th>
<th>
Country
</th>
</tr>



<tbody>
<tr>
<td id=td1>

</td>
<td id=td2 >

</td>
<td id=td3 >

</td>

<td id=td4 >

</td>

<td id =td5 >

</td>

<td id=td6 >

</td>

<td id=td7 >

</td>
<td id=td8 >

</td>
<td id=td9 >

</td>

</tr>
</tbody>

</table>
<br>
<br>
<br>
<div class = container style=text-align:center>
<button type="button" onclick="clearData()" class="btn btn-danger" > Clear Data </button>
</div> 
`;


function data() {
  var tableBody = document.querySelector("#col2 tbody");

  var newRow = document.createElement("tr");

  var fname = document.getElementById("fname").value;
  newRow.innerHTML += "<td>" + fname + "</td>";
  document.getElementById("fname").value = "";

  var lname = document.getElementById("lname").value;
  newRow.innerHTML += "<td>" + lname + "</td>";
  document.getElementById("lname").value = "";

  var ad1 = document.getElementById("ad1").value;
  newRow.innerHTML += "<td>" + ad1 + "</td>";
  document.getElementById("ad1").value = "";

  var ad2 = document.getElementById("ad2").value;
  newRow.innerHTML += "<td>" + ad2 + "</td>";
  document.getElementById("ad2").value = "";

  var pin = document.getElementById("pin").value;
  newRow.innerHTML += "<td>" + pin + "</td>";
  document.getElementById("pin").value = "";

  var selected = document.getElementById("selected").value;
  if (+selected === 1) {
      selected = "male";
  } else if (+selected === 2) {
      selected = "female";
  } else {
      selected = "others";
  }
  newRow.innerHTML += "<td>" + selected + "</td>";
  document.getElementById("selected").value = "";

  var checkboxes = document.querySelectorAll(".form-check-input:checked");
  var checkedValues = Array.from(checkboxes).map(checkbox => checkbox.value);
  newRow.innerHTML += "<td>" + checkedValues.join(", ") + "</td>";

  var state = document.getElementById("state").value;
  newRow.innerHTML += "<td>" + state + "</td>";
  document.getElementById("state").value = "";

  var country = document.getElementById("country").value;
  newRow.innerHTML += "<td>" + country + "</td>";
  document.getElementById("country").value = "";

  tableBody.appendChild(newRow);
}

function clearData() {
  var tableBody = document.querySelector("#col2 tbody");
  tableBody.innerHTML = "";
}


 