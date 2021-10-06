


 let sideBarEl = document.querySelector(".sideBar")
 let openDiv = document.querySelector(".clickOpen")
 let openEl = document.querySelector(".open")
 let closeEl = document.querySelector(".close")



// function openClose(){
//   openEl.classList.toggle("hide")
//   closeEl.classList.toggle("hide")
// }



 openDiv.addEventListener("click",function(){
   sideBarEl.classList.toggle("aside-bar")
 })
openDiv.addEventListener("click",function(){
  openEl.classList.toggle("hide")
  closeEl.classList.toggle("hide")
})
