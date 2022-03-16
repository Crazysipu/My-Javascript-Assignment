let compBtn = document.querySelector('button#Comp');
let pendBtn = document.querySelector('button#Pend');
async function fetchtodo(){
    let final=await fetch('https://jsonplaceholder.typicode.com/todos');//result
    let data=await final.json();
    let output='';
    compBtn.onclick = function(){
    data.forEach(function(todo,index) {
        if (todo.completed == true){
        output+=`<p key=${todo.id}>
                ${todo.title}
                </p>`
}})
    document.querySelector('.todos').innerHTML=output;
    }
    pendBtn.onclick = function(){
        data.forEach(function(todo,index) {
            if (todo.completed == false){
                output+=`<p key=${todo.id}
                ${todo.title}
                </p>`
    }})
        document.querySelector('.todos').innerHTML=output;
        }
}
    fetchtodo();