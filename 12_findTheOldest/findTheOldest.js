const findTheOldest = function(people) {
  const currentYear = (new Date).getFullYear();
  return people.reduce((oldest, person) => {
    const oldestAge = (oldest['yearOfDeath'] ?? currentYear) - oldest.yearOfBirth;
    const thisAge = (person['yearOfDeath'] ?? currentYear) - person.yearOfBirth;

    return (thisAge > oldestAge) ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
