
let i = 0;

function sayMyName() {
  let intro = [' ', "I'm", ' Bhavesh', ',', ' a', ' developer.'];
  if (i < intro.length) {
    document.getElementById('name').innerHTML += intro[i];
    i++;
    setTimeout(sayMyName, 700);
  }
}
function description() {
  document.getElementById('description').style = 'visibility: visible;';
}
function button() {
  document.getElementById('project').style = 'visibility: visible;';
}

function goToAbout() {
  document.getElementById('section3').scrollIntoView();
}
function goToProjects() {
  document.getElementById('section2').scrollIntoView();
}
function goToHome() {
  document.getElementById('section1').scrollIntoView();
}

window.onload = function () {
  setTimeout(sayMyName, 0);
  setTimeout(description, 5000);
  setTimeout(button, 8000);
  //   setTimeout(last, 9000);
};
