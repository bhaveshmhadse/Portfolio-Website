function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function profile() {
  document.getElementById('profile').src = 'profile.jpg';
  document.getElementById('profile').style = 'visibility:visible;';
}

async function sayMyName() {
  let description = ["I'm", 'Bhavesh', ',', 'a', 'developer'];
  let newName = '';
  for (let words of description) {
    if (words === ',') {
      await sleep(1500);
    }
    newName += words + ' ';
    await sleep(700);
    document.getElementById('name').innerText = newName;
  }
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
  }
}

async function getInTouch() {
  document.getElementById('info').innerText = 'Get In Touch';
}

async function socialMedia() {
  document.getElementById('1').src = 'instagram.png';
  document.getElementById('1').style = 'visibility: visible;';

  document.getElementById('2').src = 'github.png';
  document.getElementById('2').style = 'visibility: visible;';

  document.getElementById('3').src = 'whatsapp.png';
  document.getElementById('3').style = 'visibility: visible;';

  document.getElementById('4').src = 'facebook.png';
  document.getElementById('4').style = 'visibility: visible;';

  document.getElementById('5').src = 'twitter.png';
  document.getElementById('5').style = 'visibility: visible;';
}

window.onload = function () {
  setTimeout(profile, 1000);
  setTimeout(sayMyName, 2000);
  setTimeout(description, 7000);
  setTimeout(getInTouch, 13000);
  setTimeout(socialMedia, 14300);
};


