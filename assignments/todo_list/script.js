let Input = document.querySelector('input');
let button = document.querySelector('button');
let content = document.querySelector('.todos');
let count =-1

//main-part
button.addEventListener('click',function(){
    count +=1;
    let P =document.createElement('p');   
    P.innerHTML= Input.value
    P.setAttribute("key",count);
    content.appendChild(P);
    P.addEventListener('click',function(){
        content.removeChild(P);
    })
});