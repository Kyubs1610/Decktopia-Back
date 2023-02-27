function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

export default function pickRandom (cards){
    const indexCardOne = generateRandomInteger(cards.cards.length);

    var indexCardTwo = generateRandomInteger(cards.cards.length);
    while (indexCardOne == indexCardTwo) {
        indexCardTwo = generateRandomInteger(cards.cards.length);
    }

    var indexCardThree = generateRandomInteger(cards.cards.length);
    while (indexCardOne == indexCardThree || indexCardTwo == indexCardThree) {
        indexCardThree = generateRandomInteger(cards.cards.length);
    }

    var indexCardFour = generateRandomInteger(cards.cards.length);
    while (indexCardOne == indexCardFour || indexCardTwo == indexCardFour || indexCardThree == indexCardFour) {
        indexCardFour = generateRandomInteger(cards.cards.length);
    }

    return [cards.cards[indexCardOne].url , cards.cards[indexCardTwo].url , cards.cards[indexCardThree].url , cards.cards[indexCardFour].url];
};