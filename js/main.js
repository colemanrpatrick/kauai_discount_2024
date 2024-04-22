var btn = document.getElementsByClassName("mobileDropDown");
var i;

// var timer = function Timer(){
//   sliderPlus(1);
// }
// var beginTimer = setInterval(timer,1000);
// // function endTimer(){
// //   clearInterval(beginTimer);
// }
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click",function(){
    toggleThis(this,"active");
    var childNav = this.nextElementSibling;
    if(childNav.style.maxHeight){
      childNav.style.maxHeight = null;
    }else{
      childNav.style.maxHeight = childNav.scrollHeight + "px";
    }
  });
}
/*===========*/
//expand hidden article

try {
  let $em = document.getElementById("expand-more");
  let $el = document.getElementById("expand-less");
  let $ar = document.getElementById("activity-reading");

  $em.addEventListener("click",function(){
    $ar.className = "activity-reading expand";
    $em.style.display = "none";
    $el.style.display = "block";
  },false);

  $el.addEventListener("click",function(){
    $ar.className = "activity-reading hidden";
    $em.style.display = "block";
    $el.style.display = "none";
  },false);
} catch (error) {
  //console.log(error);
}