const getBooksFromReadList = () => {
    const storedBookList = localStorage.getItem('bookList');
    if (storedBookList) {
        return JSON.parse(storedBookList);
    }
    return [];
}
const getBooksFromWishList = () => {
    const storedBookList = localStorage.getItem('wishList');
    if (storedBookList) {
        return JSON.parse(storedBookList);
    }
    return [];
}
export  {getBooksFromReadList, getBooksFromWishList};