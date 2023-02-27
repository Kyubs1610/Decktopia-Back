function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

export default function pickRandom (cards){
    const indexCardOne = generateRandomInteger(cards.length);

    var indexCardTwo = generateRandomInteger(cards.length);
    while (indexCardOne == indexCardTwo) {
        indexCardTwo = generateRandomInteger(cards.length);
    }

    var indexCardThree = generateRandomInteger(cards.length);
    while (indexCardOne == indexCardThree || indexCardTwo == indexCardThree) {
        indexCardThree = generateRandomInteger(cards.length);
    }

    var indexCardFour = generateRandomInteger(cards.length);
    while (indexCardOne == indexCardFour || indexCardTwo == indexCardFour || indexCardThree == indexCardFour) {
        indexCardFour = generateRandomInteger(cards.length);
    }

    return cards[indexCardOne].name + " / " + cards[indexCardTwo].name + " / " + cards[indexCardThree].name +  " / " + cards[indexCardFour].name;
};