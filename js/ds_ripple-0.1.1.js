document.addEventListener('DOMContentLoaded', function(){
  var elements = document.getElementsByClassName('ds-ripple')
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', createRipple)
  }
  function createRipple(e){
    var target = e.target;
    if(getComputedStyle(target).position === 'static') target.style.position = 'relative'
    var element = document.createElement('div')
    var diameter = Math.max(target.clientWidth, target.clientHeight)
    element.classList.add('ds-ripple-circle')
    element.style.height = diameter + 'px'
    element.style.width = diameter + 'px'
    element.style.left = (e.clientX - target.offsetLeft - diameter/2) + 'px'
    element.style.top = (e.clientY - target.offsetTop - diameter/2) + 'px'
    target.appendChild(element)
    setTimeout(function(){
      target.removeChild(element)
    },300)
  }
})
