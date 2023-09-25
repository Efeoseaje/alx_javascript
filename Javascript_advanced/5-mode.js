const changeMode = (size, weight, transform, background, color) => {
  return () => {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
};

const main = () => {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(2, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const body = document.body;
  const parag = document.createElement('p');
  const paraText = document.createTextNode('Welcome Holberton!');
  parag.appendChild(paraText);
  body.appendChild(parag);

  const spookyBtn = document.createElement('button');
  const spookyBtntext = document.createTextNode('Spooky');
  spookyBtn.appendChild(spookyBtntext);
  body.appendChild(spookyBtn);
  spookyBtn.addEventListener('click', spooky);

  const darkModeBtn = document.createElement('button');
  const darkModeBtntext = document.createTextNode('Dark mode');
  darkModeBtn.appendChild(darkModeBtntext);
  body.appendChild(darkModeBtn);
  darkModeBtn.addEventListener('click', darkMode);

  const screamModeBtn = document.createElement('button');
  const screamModeBtntext = document.createTextNode('Scream mode');
  screamModeBtn.appendChild(screamModeBtntext);
  body.appendChild(screamModeBtn);
  screamModeBtn.addEventListener('click', screamMode);
};

main();
