


'use strict';

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);






// ques_1_A.addEventListener('click', function answer() {
//   checkAnswer1('A')
// });



  var newdiv = document.getElementById('newdiv');
  newdiv.addEventListener("click", function testing() {console.log("hi");});

})();