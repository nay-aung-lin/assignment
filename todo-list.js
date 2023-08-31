const form = document.querySelector('.list-form');
const search = document.querySelector('#search-list');
const tasks = document.querySelector('.tasks');
const task = document.querySelector('.task');
const done = document.querySelector('.done');
let tasksArr = [];

const addTask = (e) => {
    e.preventDefault();
    let data = document.querySelector("#add-list").value; 
    if(data){
        let li = document.createElement("li");
        li.className = "task";
        li.innerHTML = `<span class="done">${data}</span><i class="fa-solid fa-trash-can remove"></i>`;
        tasks.appendChild(li);
        tasksArr.push(data);
        console.log(tasksArr);
        document.querySelector("#add-list").value = "";


    }
}
const searching = (e)=>{
    let check = tasksArr.filter((data)=> {
        let words = data.toLowerCase();
        let searchData = search.value.toLowerCase();
        if(words == searchData){
           alert('hee');
        }
    });

}

search.addEventListener('keyup',searching);



form.addEventListener("submit",addTask);

const removeTask = (e) => {
    let trash = e.target;
    if(trash.classList.contains('remove')){
        trash.parentElement.remove();
        // tasksArr.find((rm)=> trash.textContent);
    }
}

tasks.addEventListener('click',removeTask);