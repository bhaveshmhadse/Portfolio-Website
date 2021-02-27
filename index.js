function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function sayMyName() {
  let description = ["I'm", 'Bhavesh', ',', 'a', 'developer'];
  let newName = '';
  for (let words of description) {
    if (words === ',') {
      await sleep(2000);
    }
    newName += words + ' ';
    await sleep(500);
    document.getElementById('Name').innerText = newName;
    document.getElementById('Name').style =
      "margin-bottom: 0%; margin-left: 25%; margin-top: 5%; font-size: 380%; font-family: 'Tw Cen MT';color: greenyellow;";
  }
}

async function profile() {
  document.getElementById('profile').src = 'profile.jpg';
  document.getElementById('profile').style =
    'max-height: 600px; min-height: 300px; min-width: 150px; max-width: 300px; margin-left: 35%; margin-right: 40%; margin-top: 5%; margin-bottom: 0%;';
}

async function description() {
  let description = [
    'I like programming and doing some interactive things with code.\n',
    'My Goal is to make good, robust software with clean coding.',
  ];
  let newName = '';
  for (let words of description) {
    newName += words;
    await sleep(1000);
    document.getElementById('description').innerText = newName;
    document.getElementById('description').style =
      "font-size: 125%; font-family: 'Tw Cen MT';color: greenyellow; margin-left: 25%; margin-top: 0%; color: white;";
  }
}
async function changecolourobout() {
  document.getElementById('about').innerText = 'About';
  document.getElementById('about').style =
    'font-size: 22px; font-family: Dank Mono; color: orange;';
}
async function changecolourhome() {
  document.getElementById('home').innerText = 'Home';
  document.getElementById('home').style =
    'font-size: 22px; font-family: Dank Mono; color: orange; margin-left: 60%; margin-right: 2%; margin-top: 2px;';
}
async function changecolourproject() {
  document.getElementById('project').innerText = 'Project';
  document.getElementById('project').style =
    'font-size: 22px; font-family: Dank Mono; color: orange; margin-right: 2%;';
}

async function getInTouch() {
  document.getElementById('info').innerText = 'Get In Touch';
  document.getElementById('info').style =
    "color: gold; font-size: 145%; font-family: 'Times New Roman', Times, serif; margin-left: 25%; margin-top: 0%; margin-bottom: 0%;";
}

async function socialMedia() {
  document.getElementById('1').src = 'instagram.png';
  document.getElementById('1').style =
    'min-height: 50px; min-width:50px; height: 3%; width: 3%; border-radius: 2%; margin-left: 25%; margin-top: 0%;';

  document.getElementById('2').src = 'github.png';
  document.getElementById('2').style =
    'min-height: 50px; min-width: 50px; background-color: white;height: 3%; width: 3%; border-radius: 0%; margin-left: 0.5%; margin-right: 1%; margin-top: 0%';

  document.getElementById('3').src = 'whatsapp.png';
  document.getElementById('3').style =
    'min-height: 50px; min-width: 50px; height: 3%; width: 3%; border-radius: 2%; margin-right: 1%; margin-top: 0%';

  document.getElementById('4').src = 'facebook.png';
  document.getElementById('4').style =
    'min-height: 50px; min-width: 50px; height: 3%; width: 3%; border-radius: 2%; margin-right: 1%; margin-top: 0%';

  document.getElementById('5').src = 'twitter.png';
  document.getElementById('5').style =
    'min-height: 50px; min-width: 50px; height: 3%; width: 3%; border-radius: 2%; margin-right: 1%; margin-top: 0%';
}

let butn1 = (document.getElementById('about').onmouseover = changecolourobout);
let butn2 = (document.getElementById(
  'project'
).onmouseover = changecolourproject);
let butn3 = (document.getElementById('home').onmouseover = changecolourhome);

window.onload = function () {
  setTimeout(profile, 900);
  setTimeout(sayMyName, 3000);
  setTimeout(description, 9000);
  setTimeout(getInTouch, 15000);
  setTimeout(socialMedia, 15500);
};


