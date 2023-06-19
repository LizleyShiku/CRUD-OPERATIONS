var selectedRow=null;

function onFormSubmit(e){
    event.preventDefault();
    var formData=readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();

}
//retrieve data
function readFormData(){
    var formData= {};
    formData["fname"] =document.getElementById("fname").value;
    formData["lname"] =document.getElementById("lname").value;
    formData["sch"] =document.getElementById("sch").value;
    return formData;

//return formData;
}
//insert data
function insertNewRecord(data){
    var table=document.getElementById("details").getElementsByTagName('tbody')[0];
    var newRow= table.insertRow(table.length);
    var cell1=newRow.insertCell(0)
        cell1.innerHTML=data.fname;
    var cell2=newRow.insertCell(1)
        cell2.innerHTML=data.lname;   
    var cell3=newRow.insertCell(2)
        cell3.innerHTML=data.sch;  
    var cell4=newRow.insertCell(3)
        cell4.innerHTML='<button onclick="onEdit(this)">Edit</button>  <button onclick="onDelete(this)">Delete</button>'
    
}
//Edit data
function onEdit(td){
    selectedRow= td.parentElement.parentElement;
    document.getElementById('fname').value=selectedRow.cells[0].innerHTML;
    document.getElementById('lname').value=selectedRow.cells[1].innerHTML;
    document.getElementById('sch').value=selectedRow.cells[2].innerHTML;
}
//update data
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.fname;
    selectedRow.cells[1].innerHTML=formData.lname;
    selectedRow.cells[2].innerHTML=formData.sch;
}
//Delete data
function onDelete(td) {
    if (confirm('Do you want to Delete Record')){
        row = td.parentElement.parentElement;
        document.getElementById('details').deleteRow(row.rowIndex);
        resetForm();
    }
    
}
//Reset data
function resetForm(){
    document.getElementById('fname').value='';
    document.getElementById('lname').value='';
    document.getElementById('sch').value='';
    selectedRow= null;
}