const palindromes = function (string) {
    let lString = string.toLowerCase();
    let letters = lString.split("");

    //remove punctuation and spaces
    for(let i = 0; i < letters.length;){
        if(letters[i] === "." || letters[i] === "," 
            || letters[i] === "?" || letters[i] === "!" || letters[i] === " "){
            letters.splice(i, 1);
            continue;
        }
        i++;
    }

    for(let i = 0; i < letters.length; i++){
        if(letters[i] != letters[letters.length - 1 -i]){
            return false;
        }

    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
