let i = 1 ;
function addToClick(){
    console.log("world hello")

    let title = document.getElementById("todo").value.trim();
    let desc = document.getElementById("desc").value.trim();

    let time = new Date();

    if(title==""){
        return;
    }
    if(desc==""){
        return;
    }

    let cards = document.getElementById("cards") ;

    let card = document.createElement("div");
    card.className = "card"
    
    let header = document.createElement("div"); 
    let todo = document.createElement("h2");
    todo.textContent =i+". "+title;
    todo.style.marginTop ="10px";
    let deleteBtn = document.createElement("input");
    deleteBtn.value = "Delete";
    deleteBtn.type = "button";
    deleteBtn.style.marginLeft ="400px"
    deleteBtn.style.backgroundColor ="red";
    deleteBtn.style.color = "white";

    deleteBtn.onclick = function(){
        card.remove();
    }
    
    header.style.display="flex";
    header.appendChild(todo);
    header.appendChild(deleteBtn);


    let notstarted =  document.createElement("input");
    notstarted.type = "checkbox";
    notstarted.id = "notstarted";
    notstarted.name = "notstarted";
    let notstartedlabel = document.createElement("label");
    notstartedlabel.htmlFor = "notstarted";
    notstartedlabel.textContent ="Not Started";
    notstartedlabel.style.marginLeft="20px"

    let working =  document.createElement("input");
    working.type = "checkbox";
    working.id = "working";
    working.name = "working";
    let workinglabel = document.createElement("label");
    workinglabel.htmlFor = "working";
    workinglabel.textContent ="Working";
    workinglabel.style.marginLeft="20px";

    let completed =  document.createElement("input");
    completed.type = "checkbox";
    completed.id = "completed";
    completed.name = "completed";
    let completedlabel = document.createElement("label");
    completedlabel.htmlFor = "completed";
    completedlabel.textContent ="Completed";
    completedlabel.style.marginLeft="20px"

    notstarted.onclick = function(){
        notstarted.checked =true;
        working.checked = false;
        completed.checked = false;
    }
    working.onclick = function(){
        notstarted.checked =false;
        working.checked = true;
        completed.checked = false;
    }
    completed.onclick = function(){
        notstarted.checked =false;
        working.checked = false;
        completed.checked = true;
    }
     
    let task = document.createElement("div");
    task.className = "task"

    
    task.appendChild(notstartedlabel);
    task.appendChild(notstarted);
    task.appendChild(workinglabel);
    task.appendChild(working);
    task.appendChild(completedlabel);
    task.appendChild(completed)
    
    

    let desciption = document.createElement("p");
    desciption.textContent =desc;
    
    let timepara = document.createElement("p");
    timepara.textContent =time;

    let lineBreak = document.createElement("br");

    card.appendChild(header);
    card.appendChild(desciption);
    card.appendChild(timepara);
    card.appendChild(lineBreak);
    card.appendChild(task);

    cards.appendChild(card);    
    i++;

    document.getElementById("todo").value = "" ;
    document.getElementById("desc").value = "" ;

}