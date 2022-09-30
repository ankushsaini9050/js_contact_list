const nam = /[a-zA-Z][a-zA-Z ]{2,}/;
const num = /^[0-9]{10}$/;
const reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
function fun1() {
  const name = document.getElementById("name").value;
  if (nam.test(name)) {
    document.getElementById("error1").innerHTML = "";
  } else {
    document.getElementById("error1").innerHTML = " * invalid first name";
  }
}
function fun2() {
  const name2 = document.getElementById("name2").value;
  if (nam.test(name2)) {
    document.getElementById("error2").innerHTML = "";
  } else {
    document.getElementById("error2").innerHTML = " * invalid last name";
  }
}
function fun4() {
  const numb = document.getElementById("number").value;
  if (num.test(numb)) {
    document.getElementById("error4").innerHTML = "";
  } else {
    document.getElementById("error4").innerHTML = " * invalid number";
  }
}
function fun3() {
  const email = document.getElementById("mail").value;
  if (reg.test(email)) {
    document.getElementById("error3").innerHTML = "";
  } else {
    document.getElementById("error3").innerHTML = " * invalid email";
  }
}
function btnclick() {
  const name = document.getElementById("name").value;
  const name2 = document.getElementById("name2").value;
  const numb = document.getElementById("number").value;
  const email = document.getElementById("mail").value;
  const nam = /[a-zA-Z][a-zA-Z ]{2,}/;
  const num = /^[0-9]{10}$/;
  const reg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

  if (nam.test(name) && nam.test(name2) && num.test(numb) && reg.test(email)) {
    console.log("checked");
    document.getElementById("cbox");
    let submit = document.getElementById("submit");
    submit.classList.remove("disabled");
  } else {
    console.log("no");
    alert("Incorrect informatiom");
  }
}

// validations over

var contactDetails = [];
let indexid;

function add() {
  const table = document.getElementById("table_data");
  let name = document.getElementById("name").value;
  let name2 = document.getElementById("name2").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let cls11 = document.getElementById("cls11").value;

  const detail = {
    id: Math.random(),
    name: name,
    name2: name2,
    name2: name2,
    email: email,
    number: number,
    address: address,
    cls11: cls11,
  };
  contactDetails.push(detail);

  table.innerHTML = "";

  for (let i = 0; i < contactDetails.length; i++) {
    const itemID = contactDetails[i].id;
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = contactDetails[i].name;
    cell2.innerHTML = contactDetails[i].name2;
    cell3.innerHTML = contactDetails[i].email;
    cell4.innerHTML = contactDetails[i].number;
    cell5.innerHTML = contactDetails[i].address;
    cell6.innerHTML = `<button class="btn btn-sm btn-success" onclick="edit(${contactDetails[i].id})" id="edit_but">Edit</button>
    <button class="btn btn-sm btn-danger" onclick="remove( ${contactDetails[i].id})">Remove</button>`;

    cell1.classList.add("wid");
    cell2.classList.add("wid");
    cell3.classList.add("wid");
    cell4.classList.add("wid");
    cell5.classList.add("wid");
  }
  empty();
}
function remove(id) {
  const index = contactDetails.findIndex((detail) => detail.id === id);
  const val = contactDetails[index];
  const table = document.getElementById("table_data");
  let e = contactDetails.splice(index, 1);
  document.getElementById("table_data").deleteRow(index);
}

function edit(id) {
  addbtn.style.display = "none";
  savebtn.style.display = "block";
  const index = contactDetails.findIndex((detail) => detail.id === id);
  console.log("index", index);
  const val = contactDetails[index];

  document.getElementById("name").value = val.name;
  document.getElementById("name2").value = val.name2;
  document.getElementById("email").value = val.email;
  document.getElementById("number").value = val.number;
  document.getElementById("address").value = val.address;
  indexid = id;
}

function save(id) {
  savebtn.style.display = "none";
  addbtn.style.display = "block";
  const index1 = contactDetails.findIndex((obj) => obj.id == indexid);
  contactDetails[index1].name = document.getElementById("name").value;
  contactDetails[index1].name2 = document.getElementById("name2").value;
  contactDetails[index1].email = document.getElementById("email").value;
  contactDetails[index1].number = document.getElementById("number").value;
  contactDetails[index1].address = document.getElementById("address").value;

  contactDetails.map((contact) => {
    const table = document.getElementById("table_data");
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = contact.name;
    cell2.innerHTML = contact.name2;
    cell3.innerHTML = contact.email;
    cell4.innerHTML = contact.number;
    cell5.innerHTML = contact.address;
    cell6.innerHTML = `<button class="btn btn-sm btn-success" onclick="edit(${contact.id})" id="edit_but">Edit</button>
    <button class="btn btn-sm btn-danger" onclick="remove( ${contact.id})">Remove</button>`;

    cell1.classList.add("wid");
    cell2.classList.add("wid");
    cell3.classList.add("wid");
    cell4.classList.add("wid");
    cell5.classList.add("wid");
    empty();
  });
  contactDetails.map((i) => {
    document.getElementById("table_data").deleteRow(i);
  });
}
function dlt() {
  const table = document.getElementById("table_data");
  table.innerHTML = "";
  remove();
}

function empty() {
  document.getElementById("name").value = "";
  document.getElementById("name2").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("address").value = "";
}
