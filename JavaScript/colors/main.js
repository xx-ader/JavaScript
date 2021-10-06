



let colorBody = document.querySelector("body")
let btnEl = document.querySelector(".generateBtn")


btnEl.addEventListener("click", function (){

             let x = Math.floor(Math.random()*255)
             let y = Math.floor(Math.random()*255)
             let z = Math.floor(Math.random()*255)
           document.querySelector("body").style.backgroundColor = "rgb("+x+","+y+","+z+")"
          document.querySelector(".rgb").textContent = "RGB ("+x+","+y+","+z+")"
})
