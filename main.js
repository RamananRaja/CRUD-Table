//global
var rIndex;
var newRecord = new Boolean(false);
/*new data*/
function newData() {
    //rIndex=null;
    //console.log("--from newData--"+rIndex);
    //display popup
    document.getElementById("popup").style.display = "block";
    //assigning input values to variables
    var newName = document.getElementById("name");
    var newAddress = document.getElementById("address");
    var newMobile = document.getElementById("mobile");
    var newEmail = document.getElementById("email");
    //setting input field as empty 
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";

    newRecord = true;
}
/*edit*/
function edit() {
    var table = document.getElementById("table");
    for(var i=1; i<table.rows.length; i++) {
        table.rows[i].onclick = function() {
            rIndex = this.rowIndex;
            //console.log("--from edit--"+rIndex);
            document.getElementById("popup").style.display = "block";
            document.getElementById("name").value = this.cells[0].innerHTML;
            document.getElementById("address").value = this.cells[1].innerHTML;
            document.getElementById("mobile").value = this.cells[2].innerHTML;
            document.getElementById("email").value = this.cells[3].innerHTML;
        }
    }
}
/*save*/
function save() {    
    var newName = document.getElementById("name");
    var newAddress = document.getElementById("address");
    var newMobile = document.getElementById("mobile");
    var newEmail = document.getElementById("email");
    //console.log("--from save--"+rIndex);
    var table = document.getElementById("table");
    if(newRecord==true) {
        //adding new row
        var row = table.insertRow(1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        //set new values to row
        cell0.innerHTML = newName.value;
        cell1.innerHTML = newAddress.value;
        cell2.innerHTML = newMobile.value;
        cell3.innerHTML = newEmail.value;
        cell4.innerHTML = "<button class='btn-edit' onclick='edit()'>Edit</button>&nbsp<button  class='btn-delete' onclick='del()'>Delete</button>";
        newRecord = false;
    } else {
        console.log(table.rows[rIndex].cells[0].innerHTML);
        table.rows[rIndex].cells[0].innerHTML = newName.value;
        table.rows[rIndex].cells[1].innerHTML = newAddress.value;
        table.rows[rIndex].cells[2].innerHTML = newMobile.value;
        table.rows[rIndex].cells[3].innerHTML = newEmail.value;
    }
    
    document.getElementById("popup").style.display = "none";
}
/*Cancel*/
function cancel() {
    document.getElementById("popup").style.display = "none";
}
/*Delete */
function del() {
    document.getElementById("popup").style.display = "none";
    var table = document.getElementById("table");
    for(var i=1; i<table.rows.length; i++) {
        table.rows[i].onclick = function() {
            rIndex = this.rowIndex;
            console.log("--from delete--"+rIndex);
            console.log(this.innerHTML);
            document.getElementById("table").deleteRow(rIndex);
        }
    }
}
/*Filter*/
function filter() {
    var search = document.getElementById("search");
    var filter = search.value.toUpperCase();
    var table = document.getElementById("table");
    var tr = table.getElementsByTagName("tr");
    var textValue;
    for(i=0; i<tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if(td) {
            textValue = td.textContent || td.innerText;
            //window.alert(textValue.toUpperCase().indexOf(filter));
            if(textValue.toUpperCase().indexOf(filter)>=0) {
                //console.log("display");
                tr[i].style.display = "";
            } else {
                //console.log("hide");
                tr[i].style.display = "none";
            }
        }
    }
}