// ================= LOGIN =================

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", function () {

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("errorMessage");

        if (email === "" || password === "") {

            errorMessage.innerHTML = "Please enter email and password";
            errorMessage.style.color = "red";

        } 
        else {

            window.location.href = "dashboard.html";

        }

    });

}


// ================= DASHBOARD =================

const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const fileTable = document.getElementById("fileTable");
const totalFiles = document.getElementById("totalFiles");
const searchInput = document.getElementById("searchInput");
const logoutBtn = document.getElementById("logoutBtn");


// Upload

if(uploadBtn){

uploadBtn.addEventListener("click", function(){

    fileInput.click();

});


fileInput.addEventListener("change", function(){

    const file = fileInput.files[0];


    if(file){

        const row = fileTable.insertRow(-1);


        row.insertCell(0).innerHTML = file.name;

        row.insertCell(1).innerHTML =
        (file.size / 1024 / 1024).toFixed(2) + " MB";


        row.insertCell(2).innerHTML =
        file.name.split(".").pop().toUpperCase();


        row.insertCell(3).innerHTML =
        `<button onclick="deleteFile(this)">Delete</button>`;


        updateCounter();

        fileInput.value = "";

    }

});

}


// Delete

function deleteFile(button){

    const row = button.parentElement.parentElement;

    row.remove();

    updateCounter();

}



// Counter

function updateCounter(){

    if(totalFiles){

        totalFiles.innerHTML = fileTable.rows.length - 1;

    }

}


// Search

if(searchInput){

searchInput.addEventListener("keyup", function(){

    const filter = searchInput.value.toLowerCase();

    const rows = fileTable.getElementsByTagName("tr");


    for(let i = 1; i < rows.length; i++){

        const name = rows[i]
        .getElementsByTagName("td")[0];


        if(name){

            if(name.textContent.toLowerCase().includes(filter)){

                rows[i].style.display = "";

            }
            else{

                rows[i].style.display = "none";

            }

        }

    }


});

}



// Logout

if(logoutBtn){

logoutBtn.addEventListener("click", function(){

    window.location.href = "index.html";

});

}



// Start counter

if(fileTable){

updateCounter();

}
