let url = "https://deckofcardsapi.com/api/deck";

// 1
$.getJSON(`${url}/new/draw/`)
    .then(data => {
        let { suit, value } = data.cards[0];
        console.log(`${value} of ${suit}`)
    })

// 2 - Draw 2 cards from the same deck

let card1;

$.getJSON(`${url}/new/draw/`)
    .then(data => {
        card1 = data.cards[0];
        deckId = data.deck_id;
        return $.getJSON(`${url}/${deckId}/draw/`);
    })
    .then(data => {
        card2 = data.cards[0];
        [card1, card2].forEach(card => {
            // console.log(`${card.value} of ${card.suit}`)
        });
        // return promise for next call
        return $.getJSON(`${url}/${deckId}/draw/`);
    })
    .then(data => {

        card3 = data.cards[0];
        [card1, card2, card3].forEach(card => {
            console.log(`${card.value} of ${card.suit}`)
        });
        // return data for next
        return data;
    })
    .then(data => {
        console.log(data.remaining);
    })

// 3

let deckId;
let $btn = $('#get-card')
let $cardStack = $('#card-stack')

$.getJSON(`${url}/new/shuffle/`).then(data => {
    deckId = data.deck_id;
});

$btn.on('click', () => {
    $.getJSON(`${url}/${deckId}/draw/`)
        .then(data => {
            let cardImg = data.cards[0].image;
            console.log(cardImg);

            $cardStack.append($("<img>", {
                src: cardImg,
                css: {
                    position: "absolute"
                }
            }))

            if (data.remaining === 0) $btn.remove();
        })
});


