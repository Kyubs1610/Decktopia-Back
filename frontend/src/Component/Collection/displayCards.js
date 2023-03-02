export default function dispplayCards (cards) {

    for (var card of cards.cards) {

        const cardDiv = document.createElement("div");

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = card.name;

        cardDiv.appendChild(cardTitle);
        cardDiv.classList.add(card.name);

        document.getElementById('cardsCollection').appendChild(cardDiv);
    }
};