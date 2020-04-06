
console.log('hello');
async function get_cards(){
  
  let shuffle_resp = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);

  let deck_id = shuffle_resp.data.deck_id;

  let card_resp1 = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
  let card_resp2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);

  // console.log(card_resp);
  console.log(`${card_resp1.data.cards[0].value} of ${card_resp1.data.cards[0].suit}`);
  console.log(`${card_resp2.data.cards[0].value} of ${card_resp2.data.cards[0].suit}`);
}

