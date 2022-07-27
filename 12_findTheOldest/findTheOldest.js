const findTheOldest = function(people) {
    return people.reduce((oldest, obj) => {
        if (!obj.yearOfDeath) obj.yearOfDeath = new Date().getFullYear();
        if ((obj.yearOfDeath - obj.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)) return obj;
        return oldest;
    }, {
        name: "",
        yearOfBirth: 0,
        yearOfDeath: 0,
    })
};

// Do not edit below this line
module.exports = findTheOldest;
