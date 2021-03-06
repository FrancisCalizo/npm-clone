const navAcronym = document.querySelector('.nav__acronym');

const acronyms = [
  'Naturally Pacifist, Marsupials',
  'Never Perfectly Managed',
  'No Padding Margin',
  'Neglected Pulse Machine',
  'Need Packaging Maintenance',
  'Nickleback Plays Music',
  'Nice Programming Mister',
  'Nunchaku Pizza Master'
];

const getRandomAcronym = arr => {
  return Math.floor(Math.random() * arr.length);
};

window.addEventListener('load', function() {
  navAcronym.innerHTML = acronyms[getRandomAcronym(acronyms)];
});

navAcronym.addEventListener('click', function() {
  const newAcronyms = acronyms.filter(e => {
    return e !== this.innerHTML;
  });

  navAcronym.innerHTML = newAcronyms[getRandomAcronym(newAcronyms)];
});
