const container = document.querySelector('.container');
const food = document.querySelectorAll('.food');
const ul = document.querySelector('.listFood');
const coba = document.querySelectorAll('.food p');

container.addEventListener('click',function(e){
    if(e.target.className=='close'){
        e.target.parentElement.remove();
    }
})

food.forEach(function(e){
    e.addEventListener('click',function(ee){
        const liFood = document.createElement('li');
        const nameFood = document.createTextNode('Burger');
        const span = document.createElement('span');
        const spanName = document.createTextNode('x');
        span.appendChild(spanName);
        span.setAttribute('class','close');
        liFood.appendChild(nameFood);
        liFood.appendChild(span);
        ul.appendChild(liFood);
        //untuk menghentikan fungsi default tag a
        ee.preventDefault();
    })
})
