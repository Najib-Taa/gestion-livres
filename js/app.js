import { getBooks } from "./state.js";

import {
    addBook,
    updateBook,
    deleteBook
} from "./books.js";

import {
    initializeStorage
} from "./storage.js";

import {
    renderBooks,
    fillForm,
    resetForm
} from "./ui.js";

const bookForm = document.querySelector("#book-form");
const bookId = document.querySelector("#book-id");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const cancelButton = document.querySelector("#cancel-button");
const bookList = document.querySelector("#book-list");

const getFormData = () => {
    return {
        title: document.querySelector("#title").value.trim(),

        author: document.querySelector("#author").value.trim(),

        year: document.querySelector("#year").value,

        genre: document.querySelector("#genre").value.trim(),

        description: document.querySelector("#description").value.trim(),

        status: document.querySelector("#status").value
    };
};

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const bookData = getFormData();

    if (!bookData.title || !bookData.author) {
        alert("Le titre et l'auteur sont obligatoires.");
        return;
    }

    if (bookId.value) {
        updateBook(bookId.value, bookData);
    } else {
        addBook(bookData);
    }

    resetForm();

    renderBooks(searchInput.value, sortSelect.value);
});

searchInput.addEventListener("input", () => {
    renderBooks(searchInput.value, sortSelect.value);
});

sortSelect.addEventListener("change", () => {
    renderBooks(searchInput.value, sortSelect.value);
});

bookList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");

    if (!button) {
        return;
    }

    const action = button.dataset.action;
    const id = button.dataset.id;

    const books = getBooks();

    const book = books.find((item) => item.id === id);

    if (!book) {
        return;
    }

    if (action === "edit") {
        fillForm(book);
    }

    if (action === "delete") {
        const confirmed = confirm(
            `Voulez-vous supprimer "${book.title}" ?`
        );

        if (confirmed) {
            deleteBook(id);

            renderBooks(searchInput.value, sortSelect.value);

            if (bookId.value === id) {
                resetForm();
            }
        }
    }
});

cancelButton.addEventListener("click", () => {
    resetForm();
});

const startApp = () => {
    initializeStorage();

    renderBooks();
};

startApp();