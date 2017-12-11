window.addEventListener('load', function() {
  var btn = document.getElementById('button');
  var menu = document.getElementById('menu-navigator');
     

  btn.addEventListener('click', function showNavigator(event) {
    alert('holi');
    menu.classList.toggle('menu-modal');
  });
});