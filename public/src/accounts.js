function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return result;
}
//It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  for ( let id in books) {
    const bookborrows = books[id].borrows.filter((book) => book.id === account.id);
    result += bookborrows.length;
  }
  return result;
}
  
//It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account.
function getBooksPossessedByAccount(account, books, authors) {
  let getBooks = books.filter((book) => book.borrows.some((borrow) => !borrow.returned && borrow.id === account.id));
  getBooks.map((book) => book["author"] = authors.find((author) => author.id === book.authorId));
  return getBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
