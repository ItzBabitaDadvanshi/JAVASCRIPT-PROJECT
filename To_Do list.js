const inputBox=document.getElementById("input_box");
const lisContainer=document.getElementById("list_container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li =document.createElement("li")
        li.innerHTML=inputBox.value;
        lisContainer.appendChild(li);
        let span =document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
// particular task for checked or unchecked and if crossed item delete particular function

lisContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } 
},false);

// \u00d7---is crossed icon

function saveData(){
    localStorage.setItem("data", lisContainer.innerHTML)
}

function showTask(){
    lisContainer.innerHTML = localStorage.getItem("data");
}
showTask();