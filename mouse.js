const mou =document.getElementById("hi");

function MOU(){

mou.innerText="the mouse is here "
   mou.style.color="green"
}

function Out(){
   mou.innerText="the mouse is gone"
   mou.style.color="blue"

}
function right(){
    mou.innerText="the was right back"
    mou.style.color="red"

}
function Resize(){
  mou.innerText="You just resize"
   
}
mou.addEventListener("mouseover", MOU);
mou.addEventListener("mouseout",Out)
window.addEventListener("contextmenu",right)
window.addEventListener("resize",Resize)