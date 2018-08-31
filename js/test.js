console.log("js connected !")
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    console.log("move down")
    document.querySelector(".top-bar").classList.add("top-bar-fixed")
  } else {
    console.log("move up")
    document.querySelector(".top-bar").classList.remove("top-bar-fixed")
  }
}


const toggleBtn = document.querySelector(".btn-toggle");
const toggleMenu = document.querySelector("#navbar ul");

toggleBtn.addEventListener("click", ()=>{
toggleMenu.classList.toggle("show")
})


function checkWidth(){
  const S = window.innerWidth
  const standard = 900;

  if(S > 960){
    console.log(S)
    toggleMenu.classList.remove("show");
  }
}
window.setInterval(checkWidth,100)
