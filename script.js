var container = document.createElement("div");
container.className = "container";
var Row = document.createElement("div");
Row.className = "row";
var Col = document.createElement("div");
Col.className = "col-4";
Col.id = "col1";
var Col2 = document.createElement("div");
Col2.className = "col-8";
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
<button type="button" onclick="clear()" class="btn btn-danger" > Clear Data </button>
</div>
`;


function data(){
var tD1 = document.getElementById("td1");
var fnameval = document.getElementById("fname").value;
tD1.innerHTML = fnameval;
var fnameval = document.getElementById("fname").value="";

var tD2 = document.getElementById("td2");
var lnameval = document.getElementById("lname").value;
tD2.innerHTML = lnameval;
var lnameval = document.getElementById("lname").value="";

var tD3 = document.getElementById("td3");
var ad1val = document.getElementById("ad1").value;
tD3.innerHTML = ad1val;
var ad1val = document.getElementById("ad1").value="";

var tD4 = document.getElementById("td4");
var ad2val = document.getElementById("ad2").value;
tD4.innerHTML = ad2val;
var ad2val = document.getElementById("ad2").value="";

var tD5 = document.getElementById("td5");
var pinval = document.getElementById("pin").value;
tD5.innerHTML = pinval;
var pinval = document.getElementById("pin").value="";

var tD6 = document.getElementById("td6");
var selectedval = document.getElementById("selected").value;
if( +selectedval === 1 ){
    var val1 = "male";
    selectedval = val1;
}
else if( +selectedval === 2 ){
    var val2 = "female";
    selectedval = val2;
}
else {
    var val3 = "others";
    selectedval = val3;

}
tD6.innerHTML = selectedval;
var selectedval = document.getElementById("selected").value="";

var tD7 = document.getElementById("td7");
var checkedval = document.querySelector("#flexCheckDefault").value;
tD7.innerHTML = checkedval;
checkedval = document.querySelector("#flexCheckDefault").value="";

var tD8 = document.getElementById("td8");
var stateval = document.getElementById("state").value;
tD8.innerHTML = stateval;
stateval = document.getElementById("state").value="";

var tD9 = document.getElementById("td9");
var countryval = document.getElementById("country").value;
tD9.innerHTML = countryval;
var countryval = document.getElementById("country").value="";

}

 