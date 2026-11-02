import { setBooks } from "./state.js";

export const saveBooks = (books) => {
    localStorage.setItem("books", JSON.stringify(books));
};

export const loadBooks = () => {
    const savedBooks = localStorage.getItem("books");

    if (savedBooks === null) {
        return [];
    }

    try {
        const books = JSON.parse(savedBooks);

        if (Array.isArray(books)) {
            return books;
        }

        return [];
    } catch (error) {
        console.error("Impossible de charger les livres :", error);
        return [];
    }
};

export const initializeStorage = () => {
    const books = loadBooks();

    setBooks(books);
};