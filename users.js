let users = [];

function addUser(data) {
  const user = { id: users.length + 1, ...data };
  users.push(user);
  return user;
}

// Simple Prakriti Scoring: 0=Vata, 1=Pitta, 2=Kapha
function analyzePrakriti(answers) {
  const score = { vata: 0, pitta: 0, kapha: 0 };
  answers.forEach(ans => {
    if (ans === 0) score.vata++;
    else if (ans === 1) score.pitta++;
    else if (ans === 2) score.kapha++;
  });
  if (score.vata >= score.pitta && score.vata >= score.kapha) return 'Vata Dosha';
  if (score.pitta >= score.kapha) return 'Pitta Dosha';
  return 'Kapha Dosha';
}

module.exports = { addUser, analyzePrakriti };
