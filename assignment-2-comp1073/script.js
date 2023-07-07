
const bigImg = document.querySelector("#bigImg");
const pink = document.querySelector("#pink");
const purple = document.querySelector("#purple");
const red = document.querySelector("#red");
const white = document.querySelector("#white");
const yellow = document.querySelector("#yellow");
const h2 = document.querySelector("h2");

//I'll create a function to make it more compact
function movePhoto(selector){
    switch(selector){
        case 1:
            bigImg.src = "images/flowers-pink-large.jpg"
            break;
        case 2:
            bigImg.src = "images/flowers-purple-large.jpg"
            break;
        case 3:
            bigImg.src = "images/flowers-red-large.jpg"
            break;
        case 4:
            bigImg.src = "images/flowers-white-large.jpg"
            break;
        case 5:
            bigImg.src = "images/flowers-yellow-large.jpg"
            break;
        default:
            bigImg.src = "images/flower-field.jpeg"
            break;

    } 
}
//here I add the event listeners
pink.addEventListener("click" ,function(e){
    movePhoto(1);
})

purple.addEventListener("click", function(){
    movePhoto(2);
})

red.addEventListener("click", function(){
    movePhoto(3);
})

white.addEventListener("click", function(){
    movePhoto(4);
})

yellow.addEventListener("click", function(){
    movePhoto(5)
})

h2.addEventListener("click", function(){
    movePhoto(0)
})