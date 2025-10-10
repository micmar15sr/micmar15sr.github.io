// Sample list of publications (you can fetch from JSON or API)
const publications = [
    {   image: "https://example.com/image1.jpg",
        title: "Understanding the Universe",
        authors: "Jane Doe, John Smith",
        journal: "Astrophysics Journal, 2022"
    },
    {
        image: "https://example.com/image2.jpg",
        title: "Advances in Machine Learning",
        authors: "Alice Johnson, Bob Lee",
        journal: "ML Review, 2023"
    },
    {
        image: "https://example.com/image3.jpg",
        title: "Quantum Computing: An Overview",
        authors: "Dr. Qubit",
        journal: "Quantum Times, 2021"
    }
];

function renderPublications(pubList) {
    const container = document.getElementById("publications-list");

    pubList.forEach(pub => {
        const li = document.createElement("li");

        li.innerHTML = `
           <!-- <div class="publication-image"><img src="${pub.image}" alt="${pub.title}"></div> -->
            <div class="publication-title">${pub.title}</div>
            <div class="publication-authors">${pub.authors}</div>
            <div class="publication-journal">${pub.journal}</div>
        `;

        container.appendChild(li);
    });
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
    renderPublications(publications);
});
