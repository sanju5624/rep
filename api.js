document.addEventListener('DOMContentLoaded', function () {
    fetchAndRender();

    document.getElementById('formEle').addEventListener('submit', function (event) {
        event.preventDefault();
        addStudent();
    });
});

async function fetchAndRender(){
    try{
    const res = await axios.get("http://localhost:3000/student")
    const responseData = res.data

    document.getElementById("studentList").innerHTML = "";
    
    responseData.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML=`
            <td>${student.rollno}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>
            <button onclick="editRecord(${student.id})">Edit</button>

            <button onclick="deleteRecord(${student.id})">delete</button>
            </td>
        `;
        document.getElementById("studentList").appendChild(row);
    })
    
}
catch(err){
    console.error("error in get",err)
}

}

const url = 'http://localhost:3000/student';




async function addStudent() {
    const rollno = document.getElementById("rollno").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;
    const id = Math.floor(Math.random() * 1000).toString()

    try {
        await axios.post(url, { id, rollno, name, age, course });
        fetchAndRender();
    } catch (err) {
        console.error(err);
    }
}

async function deleteRecord(id) {
    try {
        const res = await axios.delete(`http://localhost:3000/student/${id}`);
        console.log(res);
        fetchAndRender();
    } catch (err) {
        console.error(err);
    }
}