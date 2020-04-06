let DECK_ID;

async function grabDeck(){
  // grabbing deck
  let shuffle_resp = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
  DECK_ID = shuffle_resp.data.deck_id;

}

// async function get_card(){
// }

$("#gimme-card").on("click", async function(){
  // let card = get_card();
  
  let card = await axios.get(`https://deckofcardsapi.com/api/deck/${DECK_ID}/draw/?count=1`);
  let cardImage = card.data.cards[0].image;
  let $cardArea = $('#cards-here');
  let randomAngle = Math.round(Math.random() * 100);
  console.log(randomAngle);

  $cardArea.append(`<img src="${cardImage}" style="transform: rotate(${randomAngle}deg);">`);

});

grabDeck();