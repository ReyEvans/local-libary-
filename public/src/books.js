//It returns the author object that has the matching ID.
function findAuthorById(authors, id) {
const getID = authors.find((author) => author.id === id);
return getID;
}

//It returns the book object that has the matching ID
function findBookById(books, id) {
  const bookId = books.find((book) => book.id === id);
  return bookId;
}

//It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.
//The first array contains book objects that represent the books _that are currently checked out_, while the second array contains book objects that represent the books _that have been returned._ You can check for the return status by looking at the first transaction object in the `borrows` array.
function partitionBooksByBorrowedStatus(books) {
  let emptyA1 = [];
  let emptyA2 = [];
  const statusCheck = books.filter((book) => {
  const borrowed = book.borrows.some(borrow => borrow.returned === false);
   if (!borrowed) emptyA1.push(book)
    return borrowed;
  } ,[]);
 emptyA2.push(statusCheck);
  emptyA2.push(emptyA1);
  return emptyA2;
} 

//It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.
function getBorrowersForBook(book, accounts) {
  const result = book.borrows.map(borrower => { 
    const result = accounts.find(account => borrower.id === account.id )
    result.returned = borrower.returned;
    return result;
   })
   return result.filter((borrower, index)=> result.findIndex(item => item.id === borrower.id) === index);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
