let listOfItems = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    cardContainer = document.getElementById('cards');

listOfItems.forEach((item) => {
    cardContainer.innerHTML += `<li class ='item-${item}' > ${item} </li>`
});

const shuffleValues = (itemList) => {
    for (let i = itemList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [itemList[i], itemList[j]] = [itemList[j], itemList[i]];
    }
    return itemList;
}

const createList = (shuffleItem) => {
    cardContainer.innerHTML = ''
    for (let index = 0; index < shuffleItem.length; ++index) {
        cardContainer.append(Object.assign(document.createElement('li'), {
            classList: `item-${shuffleItem[index]}`,
            innerHTML: shuffleItem[index]
        }));
    }
}

shuffleCards = () => {
    let shuffleItem = shuffleValues(listOfItems);
    createList(shuffleItem);
}

sortCards = () => {    
    listOfItems = listOfItems.sort((a, b) => { return a - b });
    createList(listOfItems);    
}

