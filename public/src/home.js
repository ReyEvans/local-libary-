function getTotalBooksCount(books) {
  //It returns a _number_ that represents the number of book objects inside of the array.
 return books.length 
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //It returns a _number_ that represents the number of books _that are currently checked out of the library._ This number can be found by looking at the first transaction object in the `borrows` array of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.
  let total = 0;
  for (let i = 0; i < books.length; i++){
    if(books[i].borrows[0].returned === false) total++
  }
  return total;
}

//It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.
function getMostCommonGenres(books) {
  const genre = books.map((book) => book.genre);
  const result = [];
  const count = {};
  genre.forEach(function (index) {
    count[index] = (count[index] || 0) + 1;
  });
  for (let key in count) {
    result.push({
      name: key,
      count: count[key],
    });
  }
  result.sort((a, b) => (a.count < b.count ? 1 : -1));
  return result.slice(0, 5);
}

    //It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.
function getMostPopularBooks(books) {
  const sliceEnd = books.length > 5 ? 5 : books.length;
  return books.map(book => {
      return {
        name: book.title,
        count: book.borrows.length
      }
    })
    .sort((a,b) => b.count - a.count)
    .slice(0, sliceEnd);
}

//It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.
function getMostPopularAuthors(books, authors) {
  const result= [];
  authors.forEach(author => {
    const returnAuthor = { 
      name: `${author.name.first} ${author.name.last}`, 
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        returnAuthor.count += book.borrows.length;
      }
    })
    result.push(returnAuthor);
  })
  return result.sort((a,b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
