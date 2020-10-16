const bars = document.getElementById('hamburger');
const moveMenu = document.querySelector(".navegacion");

bars.addEventListener('click', ()=>{
  console.log(moveMenu);
  moveMenu.classList.toggle("move-menu");
  console.log(bars);
})
