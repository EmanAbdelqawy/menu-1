var smallImg =document.querySelectorAll(".pizza-img")
var bigImg =document.querySelector(".big")
smallImg.forEach(function(img){
   img.onclick = function(){
      bigImg.src = img.src
   }
})

var sm =document.querySelectorAll(".sushi-img")
var bg =document.querySelector(".big-sushi")
sm.forEach(function(i){
   i.onclick = function(){
      bg.src = i.src
   }
})

var x =document.querySelectorAll(".special-img")
var y =document.querySelector(".big-special")
x.forEach(function(photo){
   photo.onclick = function(){
      y.src = photo.src
   }
})

var a =document.querySelectorAll(".des-img")
var b =document.querySelector(".big-des")
a.forEach(function(z){
   z.onclick = function(){
      b.src = z.src
   }
})

var allProducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn = document.querySelector("#AddToCart")
var prices = document.querySelector("#show-price")
var totalPrice =  0 ;

var c =document.querySelector(".co")

allProducts.forEach(function (item){
     item.onclick = function (){
        totalPrice +=  parseInt(item.getAttribute("price"))  
        content.innerHTML += item.textContent + " | " ;
        if (content.innerHTML !="  "){
            btn.style.display = "inline-block";
         }
     }
})
var x= btn.onclick = function(){
   parseInt (prices.innerHTML += (totalPrice) ) 
   if (x!=0){
      prices.innerHTML= totalPrice +"$"
   }
}
