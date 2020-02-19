let cards = [
    hearts = ['Ah', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', 'jh', 'qh', 'kh'],
    diamonds = ['Ad', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', 'jd', 'qd', 'kd'],
    spades = ['As', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', 'js', 'qs', 'ks'],
    clubs = ['Ac', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', 'jc', 'qc', 'kc']
]

class FiveCards {
    constructor(cardValue) {
        this.cardValue = cardValue;
        cardValue = cards
        this.deal(cardValue)

    }

    deal(arr) {
        let arrNum = Math.floor((Math.random() * arr.length))
        let indxNum = Math.floor((Math.random() * arr[arrNum].length))
        let newCard = arr[arrNum][indxNum]
        let newHand = []
        newHand.push(newCard)
      console.log(newHand)
    }
    //  draw(){}
    //  show(){}
    //  result(){}
}

randomVal = (a) => {
    Math.floor((Math.random() * a))
}

$('#btnDeal').click(() => new FiveCards)