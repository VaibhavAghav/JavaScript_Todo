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
    let todo = document.createElement("h2");
    todo.textContent =i+". "+title;
    let desciption = document.createElement("p");
    desciption.textContent =desc;
    let timepara = document.createElement("p");
    timepara.textContent =time;
    card.appendChild(todo);
    card.appendChild(desciption);
    card.appendChild(timepara);
    cards.appendChild(card);    
    i++;

    document.getElementById("todo").value = "" ;
    document.getElementById("desc").value = "" ;

}