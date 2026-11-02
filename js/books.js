import { getBooks, setBooks } from "./state.js";
import { saveBooks } from "./storage.js";

export const addBook = (bookData) => {
    const newBook = {
        id: crypto.randomUUID(),
        ...bookData
    };

    const books = getBooks();

    setBooks([...books, newBook]);

    saveBooks(getBooks());
};

export const updateBook = (id, bookData) => {
    const books = getBooks();

    const updatedBooks = books.map((book) => {
        if (book.id === id) {
            return {
                ...book,
                ...bookData
            };
        }

        return book;
    });

    setBooks(updatedBooks);

    saveBooks(updatedBooks);
};

export const deleteBook = (id) => {
    const books = getBooks();

    const updatedBooks = books.filter((book) => {
        return book.id !== id;
    });

    setBooks(updatedBooks);

    saveBooks(updatedBooks);
};

export const getFilteredBooks = (searchText, sortBy) => {
    const books = getBooks();

    const filteredBooks = books.filter((book) => {
        const title = book.title.toLowerCase();
        const author = book.author.toLowerCase();
        const search = searchText.toLowerCase();

        return title.includes(search) || author.includes(search);
    });

    return filteredBooks.sort((a, b) => {
        if (sortBy === "year") {
            return (Number(b.year) || 0) - (Number(a.year) || 0);
        }

        return a[sortBy].localeCompare(b[sortBy], "fr");
    });
};