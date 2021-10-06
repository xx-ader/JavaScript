/** text set */
let writeText = document.querySelector("#inputText")
let textEl = document.querySelector("#showText")
writeText.onkeyup = function(){
  textEl.innerHTML = writeText.value
}

/** size set */
let fontSizeEl = document.querySelector("#sizeFont")

  fontSizeEl.addEventListener("input",function(){
  textEl.style.fontSize = `${fontSizeEl.value}px`

  })

/** color set */

let colorEl = document.querySelector("#text-color")

colorEl.addEventListener("input",function(){
  textEl.style.color = colorEl.value
})

/** font set */
let fontEl = document.querySelector(".font-fami")

fontEl.addEventListener("change",function(){
  textEl.style.fontFamily = fontEl.value
})

/** btn  */
let generateBtnEl = document.querySelector(".generateBtn")
let cloneEl = document.querySelectorAll(".clone")

generateBtnEl.addEventListener("click",function(){
     cloneEl[0].innerHTML = `${fontEl.value}`
     cloneEl[1].innerHTML = `${fontSizeEl.value}px`

     cloneEl[2].innerHTML = `${colorEl.value}`
     cloneEl[2].style.color = `${colorEl.value}`
})