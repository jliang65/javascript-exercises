const getAge = function(person){
    let recentYear;
    if('yearOfDeath' in person){
        recentYear = person.yearOfDeath;
    }else{
        recentYear = (new Date()).getFullYear();
    }
    return recentYear - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((acc, person) => 
        {if(getAge(acc) > getAge(person)){
            return acc;
        }else{
            return person;
        }}
        , people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
