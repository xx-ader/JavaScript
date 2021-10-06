
let circle = document.querySelector(".section1")
let rightBtn = document.querySelector(".right")
let leftBtn = document.querySelector(".left")
let rotationEl = document.querySelector(".rotation")
let stopEl = document.querySelector(".stop")
let interval
let x = 0



 
   rightBtn.addEventListener("click", function(){
    setInterval(function(){
     x++
    // if(x>=360) x = 0
     circle.style.transform = `rotate(${x}deg)`
     circle.style.borderColor = "#01570df2"
     rotationEl.innerHTML = `${x}`
    },10)
   })


   leftBtn.addEventListener("click", function(){
    let intervalNegatif = setInterval(function(){
     x--
    // if(x>=360) x = 0
     circle.style.transform = `rotate(${x}deg)`
     circle.style.borderColor = "#cf240df2"
     rotationEl.innerHTML = `${x}`
    },10)

    
   })
 
stopEl.addEventListener("click",function(){

  
  clearInterval(intervalNegatif)

})


// circle.addEventListener("mouseout",function (){
//   clearInterval(interval)
// })
