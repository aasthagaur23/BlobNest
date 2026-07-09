const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const fileTable = document.getElementById("fileTable");
const totalFiles = document.getElementById("totalFiles");
uploadBtn.addEventListener("click", function () {
    fileInput.click();
});

fileInput.addEventListener("change", function () {

    const file = fileInput.files[0];

    if(file){

        const newRow = fileTable.insertRow(-1);

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
const cell4 = newRow.insertCell(3);

cell1.innerHTML = file.name;
cell2.innerHTML = (file.size / 1024 / 1024).toFixed(2) + " MB";
cell3.innerHTML = file.name.split(".").pop().toUpperCase();

cell4.innerHTML = `<button onclick="deleteFile(this)">Delete</button>`;
totalFiles.innerHTML = fileTable.rows.length - 1;
    }

});
searchInput.addEventListener("keyup", function () {

    let filter = searchInput.value.toLowerCase();

    let rows = fileTable.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {

        let firstCell = rows[i].getElementsByTagName("td")[0];

        if (firstCell) {

            let text = firstCell.textContent.toLowerCase();

            if (text.includes(filter)) {

                rows[i].style.display = "";

            } else {

                rows[i].style.display = "none";

            }

        }

    }

});
function deleteFile(button) {

    const row = button.parentElement.parentElement;

    row.remove();

    totalFiles.innerHTML = fileTable.rows.length - 1;

}
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function(){

    window.location.href = "index.html";

});