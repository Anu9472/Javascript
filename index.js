let form = document.querySelector("form")
let name = document.getElementById("name")
let id = document.getElementById("id")
let specialization = document.getElementById("specialization")
let experience = document.getElementById("experience")
let email = document.getElementById("email")
let mobile = document.getElementById("mobile")
let role = document.getElementById("role")
let tbody = document.querySelector("tbody")

form.addEventListener("submit",getData);
let doc_data = JSON.parse(localStorage.getItem("array")) ||[];

function getData(){
    event.preventDefault();
    let doctor_obj = {
      name: name.value,
      id: id.value,
      specialization: specialization.value,
      experience: experience.value,
      email: email.value,
      mobile: mobile.value,
      role: role.value
 
    }
  doc_data.push(doctor_obj)
    localStorage.setItem("array",JSON.stringify(doc_data))

display(doc_data)
    
}

function display(data){
    tbody.innerHTML = "";

   data.map(function(el){
         let row = document.createElement("tr")

    // console.log(row);

    let col1 = document.createElement("td")
    col1.innerText = el.name;
    let col2= document.createElement("td")
    col2.innerText = el.id;
    let col3 = document.createElement("td")
    col3.innerText = el.specialization;
    let col4 = document.createElement("td")
    col4.innerText = el.experience;
    let col5 = document.createElement("td")
    col5.innerText = el.email;
    let col6= document.createElement("td")
    col6.innerText = el.mobile;
    let col7 = document.createElement("td")
    if( el.experience>5){
        el.role = "senior"
    }else if (el.experience>=2&& el.experience<=5){
        el.role = "junior"
    }else if(el.experience <=1){
        el.role = "traniee"
    }
    col7.innerText = el.role;
    let col8 = document.createElement("td")
    col8.addEventListener("click", Delfun);
    col8.innerText="Delete"
    col8.style.backgroundColor = "red"
    col8.style.color = "white";

    row.append(col1,col2,col3,col4,col5,col6,col7,col8)
  tbody.append(row)
   });
}

function Delfun(){
     event.target.parentNode.remove();
}












// display()