import { getFilteredBooks } from "./books.js";

const getStatusText = (status) => {
    const statuses = {
        "to-read": "À lire",
        "reading": "En cours de lecture",
        "read": "Lu"
    };

    return statuses[status] || "À lire";
};

export const renderBooks = (searchText = "", sortBy = "title") => {
    const bookList = document.querySelector("#book-list");
    const bookCount = document.querySelector("#book-count");

    const books = getFilteredBooks(searchText, sortBy);

    bookCount.textContent = `${books.length} livre(s)`;

    if (books.length === 0) {
        bookList.innerHTML = `
            <p class="empty-message">
                Aucun livre trouvé.
            </p>
        `;

        return;
    }

    bookList.innerHTML = books.map((book) => {
        const title = escapeHTML(book.title);
        const author = escapeHTML(book.author);
        const genre = escapeHTML(book.genre || "Non précisé");
        const description = escapeHTML(book.description || "Aucune description.");
        const status = getStatusText(book.status);

        return `
            <article class="book-card">

                <h3>${title}</h3>

                <p><strong>Auteur :</strong> ${author}</p>

                <p><strong>Année :</strong> ${book.year || "Non précisée"}</p>

                <p><strong>Genre :</strong> ${genre}</p>

                <p><strong>Description :</strong> ${description}</p>

                <span class="book-status">${status}</span>

                <div class="book-actions">

                    <button
                        type="button"
                        class="edit-button"
                        data-action="edit"
                        data-id="${escapeHTML(book.id)}"
                    >
                        Modifier
                    </button>

                    <button
                        type="button"
                        class="delete-button"
                        data-action="delete"
                        data-id="${escapeHTML(book.id)}"
                    >
                        Supprimer
                    </button>

                </div>

            </article>
        `;
    }).join("");
};

const escapeHTML = (value) => {
    return String(value).replace(/[&<>"']/g, (character) => {
        const characters = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return characters[character];
    });
};

export const fillForm = (book) => {
    document.querySelector("#book-id").value = book.id;
    document.querySelector("#title").value = book.title;
    document.querySelector("#author").value = book.author;
    document.querySelector("#year").value = book.year || "";
    document.querySelector("#genre").value = book.genre || "";
    document.querySelector("#description").value = book.description || "";
    document.querySelector("#status").value = book.status || "to-read";

    document.querySelector("#form-title").textContent = "Modifier un livre";
    document.querySelector("#submit-button").textContent = "Enregistrer les modifications";
    document.querySelector("#cancel-button").hidden = false;

    document.querySelector("#book-form").scrollIntoView({
        behavior: "smooth"
    });
};

export const resetForm = () => {
    document.querySelector("#book-form").reset();

    document.querySelector("#book-id").value = "";

    document.querySelector("#form-title").textContent = "Ajouter un livre";
    document.querySelector("#submit-button").textContent = "Ajouter le livre";
    document.querySelector("#cancel-button").hidden = true;
};