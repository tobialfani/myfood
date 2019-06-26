const container = document.querySelector('.container');
const food = document.querySelectorAll('.food');
const ul = document.querySelector('.listFood');
const coba = document.querySelectorAll('.food p');
const price = document.querySelector('.price span');

//func close
container.addEventListener('click',function(e){
    if(e.target.className=='close'){
        let foodTarget = e.target.parentElement;
        totalPrice(foodTarget,"min");
        foodTarget.remove();
    }
})

//func Harga total
let data = 0;
function totalPrice(priceFoodp,type) {
    let priceFood = parseInt(priceFoodp.getAttribute('data-price'));
    if(type=="plus"){
        data = data + priceFood;
    }else if(type=="min"){
        data = data - priceFood;
    }
    price.innerHTML=data;
}
//func pembentukan li
function makeLi(makeLiP){
    let priceFood = parseInt(makeLiP.getAttribute('data-price'));
    const liFood = document.createElement('li');
    const nameFood = makeLiP.getAttribute('data-name');
    const nameFood2 = nameFood.charAt(0).toUpperCase() + nameFood.slice(1);
    const span = document.createElement('span');
    const spanName = document.createTextNode('x');
    span.appendChild(spanName);
    span.setAttribute('class','close');
    liFood.setAttribute('data-price',priceFood);
    liFood.append(nameFood2);
    liFood.appendChild(span);
    ul.appendChild(liFood);
}

//ketika makanan diklik
for(const foodTarget of food){
    foodTarget.addEventListener('click',function(){
        makeLi(foodTarget);
        totalPrice(foodTarget,"plus");
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
