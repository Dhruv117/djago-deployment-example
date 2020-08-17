  document.querySelector('.sqsu').addEventListener("click",function() {
    document.querySelector('.sqou').value = document.querySelector('.sqpe').value * 4
  })
document.querySelector('.resu').addEventListener("click",function() {
  document.querySelector('.reou').value = document.querySelector('.reside1').value * 2 + document.querySelector('.reside2').value * 2

})
document.querySelector('.rearsu').addEventListener("click",function() {
  document.querySelector('.rearou').value = document.querySelector('.rear1').value * document.querySelector('.rear2').value

})
