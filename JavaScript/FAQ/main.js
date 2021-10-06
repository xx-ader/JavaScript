let qstEl = document.querySelectorAll(".qst")





    for(let i=0; i<qstEl.length;i++){
        qstEl[i].addEventListener("click",function(){
    qstEl[i].classList.toggle("showQst")

    })
    }

