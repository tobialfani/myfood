const container = document.querySelector('.container');
const food = document.querySelectorAll('.food');
const ul = document.querySelector('.listFood');
const coba = document.querySelectorAll('.food p');
const price = document.querySelector('.price span');

container.addEventListener('click',function(e){
    if(e.target.className=='close'){
        e.target.parentElement.remove();
    }
})

let data = 0;
function totalPrice(priceFoodp) {
    let priceFood = parseInt(priceFoodp.getAttribute('data-price'));
    data = data + priceFood;
    price.innerHTML=data;
}

for(const a of food){
    a.addEventListener('click',function(e){
        const liFood = document.createElement('li');
        const nameFood = a.getAttribute('data-name');
        const nameFood2 = nameFood.charAt(0).toUpperCase() + nameFood.slice(1);
        const span = document.createElement('span');
        const spanName = document.createTextNode('x');
        span.appendChild(spanName);
        span.setAttribute('class','close');
        liFood.append(nameFood2);
        liFood.appendChild(span);
        ul.appendChild(liFood);
        totalPrice(a);
    })
}


// food.forEach(function(e){
//     e.addEventListener('click',function(ee){
//         const liFood = document.createElement('li');
//         const nameFood = document.createTextNode('Burger');
//         const span = document.createElement('span');
//         const spanName = document.createTextNode('x');
//         span.appendChild(spanName);
//         span.setAttribute('class','close');
//         liFood.appendChild(nameFood);
//         liFood.appendChild(span);
//         ul.appendChild(liFood);
//         //untuk menghentikan fungsi default tag a
//         ee.preventDefault();
//     })
// })
