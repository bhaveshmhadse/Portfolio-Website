function s() {
  document.getElementById('section3').scrollIntoView();
}
let i = 0;

function sayMyName() {
  let intro = [' ', "I'm", ' Bhavesh', ',', ' a', ' developer.'];
  if (i < intro.length) {
    document.getElementById('name').innerHTML += intro[i];
    i++;
    setTimeout(sayMyName, 700);
  }
}

let theme = 'light';
function changeTheme() {
  if (theme === 'light') {
    theme = 'dark';

    document.getElementById('theme').style = 'border-color: white';
    document.getElementById('name').style = 'color: greenyellow';
    document.getElementById('bdm').style = 'color: white';
    document.getElementById('li').style = 'color: white';
    document.getElementById('contact').style =
      'color: white; background-color:black';
    document.getElementById('section1').style = 'background-color: black';
    document.getElementById('d').style = 'color: white';
    document.getElementById('des1').style = 'color: greenyellow';
    document.getElementById('good').style = 'color: greenyellow';
    document.getElementById('des2').style = 'color: greenyellow';
    document.getElementById('div').style = 'background-color:greenyellow;';
    document.getElementById('b').style =
      'color: white;background-color: black;';
    document.getElementById('navbar').style = 'background-color: rgb(16, 16, 85);';
    document.getElementById('divs').style =
      'color: white; background-color:black';
    document.getElementById('app').style = 'color: greenyellow; ';
    document.getElementById('divs2').style =
      'color: white; background-color:black';
    document.getElementById('app2').style = 'color: greenyellow; ';
    document.getElementById('divs3').style =
      'color: white; background-color:black';
    document.getElementById('app3').style = 'color: greenyellow; ';
    document.getElementById('divs4').style =
      'color: white; background-color:black';
    document.getElementById('app4').style = 'color: greenyellow; ';
    document.getElementById('divs5').style =
      'color: white; background-color:black';
    document.getElementById('app5').style = 'color: greenyellow; ';
    document.getElementById('divs6').style =
      'color: white; background-color:black';
    document.getElementById('app6').style = 'color: greenyellow; ';
  } else {
    theme = 'light';
    document.getElementById('theme').style = 'border-color: black';

    document.getElementById('contact').style =
      'color: black; background-color:white';
    document.getElementById('divs6').style =
      'color: black; background-color:white';
    document.getElementById('app6').style = 'color: rgb(3,83,3); ';
    document.getElementById('divs2').style =
      'color: black; background-color:white';
    document.getElementById('app2').style = 'color: rgb(3,83,3); ';
    document.getElementById('divs3').style =
      'color: black; background-color:white';
    document.getElementById('app3').style = 'color: rgb(3,83,3); ';
    document.getElementById('divs4').style =
      'color: black; background-color:white';
    document.getElementById('app4').style = 'color: rgb(3,83,3); ';
    document.getElementById('divs5').style =
      'color: black; background-color:white';
    document.getElementById('app5').style = 'color: rgb(3,83,3); ';
    document.getElementById('divs').style =
      'color: black; background-color:white';
    document.getElementById('app').style = 'color: rgb(3,83,3); ';
    document.getElementById('name').style = 'color: rgb(3,83,3);';
    document.getElementById('name').style = 'color: rgb(3,83,3);';
    document.getElementById('bdm').style = 'color: black';
    document.getElementById('li').style = 'color: black';
    document.getElementById('section1').style = 'background-color: white';
    document.getElementById('d').style = 'color: black';
    document.getElementById('des1').style = 'color: rgb(3,83,3);';
    document.getElementById('good').style = 'color: rgb(3,83,3);';
    document.getElementById('des2').style = 'color: rgb(3,83,3);';
    document.getElementById('div').style =
      'background-color: rgb(3, 83, 4); width: 100%; height: .4vh; margin-bottom: 0%;';
    document.getElementById('b').style =
      'color: black;background-color: white;';
    document.getElementById('navbar').style = 'background-color: darkgrey;';
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
