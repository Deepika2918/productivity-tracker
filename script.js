function addTask(){

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value;

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    let now = new Date();

    let dateTime =
        now.toLocaleDateString() +
        " " +
        now.toLocaleTimeString();

    let li = document.createElement("li");

    li.innerHTML =
        "<b>" + taskText + "</b><br>" +
        "<span class='time'>Added: " + dateTime + "</span><br><br>" +
        "<button onclick='markDone(this)'>Done</button> " +
        "<button onclick='deleteTask(this)'>Delete</button>";

    document.getElementById("pendingList").appendChild(li);

    taskInput.value="";
}

function markDone(button){

    let task = button.parentElement;

    button.remove();

    document.getElementById("completedList").appendChild(task);
}

function deleteTask(button){
    button.parentElement.remove();
}
