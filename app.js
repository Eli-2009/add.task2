let l1 = document.querySelector('.l1');
let l2 = document.querySelector('.l2');
let l3 = document.querySelector('.l3');
let l4 = document.querySelector('.l4');
let l5 = document.querySelector('.l5');

l1.style.color = 'blue'

l1.addEventListener('click', ()=>{
    l1.style.color = 'blue'
    l2.style.color = 'black'
    l3.style.color = 'black'
    l4.style.color = 'black'
    l5.style.color = 'black'
})
l2.addEventListener('click', ()=>{
    l2.style.color = 'blue'
    l1.style.color = 'black'
    l3.style.color = 'black'
    l4.style.color = 'black'
    l5.style.color = 'black'
})
l3.addEventListener('click', ()=>{
    l3.style.color = 'blue'
    l1.style.color = 'black'
    l2.style.color = 'black'
    l4.style.color = 'black'
    l5.style.color = 'black'
})
l4.addEventListener('click', ()=>{
    l4.style.color = 'blue'
    l1.style.color = 'black'
    l2.style.color = 'black'
    l3.style.color = 'black'
    l5.style.color = 'black'
})
l5.addEventListener('click', ()=>{
    l5.style.color = 'blue'
    l1.style.color = 'black'
    l2.style.color = 'black'
    l3.style.color = 'black'
    l4.style.color = 'black'
})