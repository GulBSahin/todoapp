//Variables
const ul=document.querySelector(".todolist-list-container"); /* ul listesi*/
const button=document.querySelector(".add-btn");
const inputText=document.querySelector("#task");
const form=document.querySelector("#add-task");
const deleteButton=document.querySelectorAll(".btn"); /* bütün butonları döktü */
const hidenDiv=document.querySelector("#footer");

console.log(ul);
console.log(button);
console.log(inputText);

//Functions
const createTask=(taskText)=>{    
    return `
    <div class="list-group">
                    <li class="unchecked">
                        ${taskText}
                    </li>
                    <button class="btn"><i class="fas fa-trash-alt"></i></button>
                </div>
    `
}

//Events
//add task event
button.addEventListener("click", e=>{
    e.preventDefault(); 
    ul.innerHTML += createTask(inputText.value);
    form.reset()
     //completed task count 
     var checkedCount = ul.getElementsByClassName("checked").length;
     console.log(checkedCount);
     var taskCount = ul.getElementsByClassName("list-group").length;
     console.log(taskCount);
     
     const  checkedTasks=document.getElementById("checkedTasks"); 
     const  allTasks=document.getElementById("allTasks"); 
       
     checkedTasks.innerHTML=checkedCount;
     allTasks.innerHTML=taskCount ;
   
})

//remove task event
ul.addEventListener("click", e=> {
    if(e.target.classList.contains("btn")) {
        e.target.parentElement.remove();
    }   
console.log(e.target.classList.contains("btn"));
//completed task count 
checkedCount = ul.getElementsByClassName("checked").length;
console.log(checkedCount);
taskCount = ul.getElementsByClassName("list-group").length;
console.log(taskCount);

const  checkedTasks=document.getElementById("checkedTasks"); 
const  allTasks=document.getElementById("allTasks"); 
  
checkedTasks.innerHTML=checkedCount;
allTasks.innerHTML=taskCount ;
console.log(ul);
})

//check the items events
ul.addEventListener("click", e=> {
    if(e.target.classList.contains("unchecked")) {
        e.target.closest("li").className = "checked";
    }else  {
        e.target.closest("li").className = "unchecked";
    } 
//  console.log(e.target.classList.contains("unchecked"));
 console.log(e.target);
 
 //completed task count 
 checkedCount = ul.getElementsByClassName("checked").length;
 console.log(checkedCount);
 taskCount = ul.getElementsByClassName("list-group").length;
 console.log(taskCount);
 
 const  checkedTasks=document.getElementById("checkedTasks"); 
 const  allTasks=document.getElementById("allTasks"); 
   
 checkedTasks.innerHTML=checkedCount;
 allTasks.innerHTML=taskCount ;
 console.log(ul);

})

