const getTheTitles = function(bookArr) {
    let titleArr = bookArr.reduce((acc, book) => {acc.push(book.title); return acc;}, []);
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
