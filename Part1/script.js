
async function get_facts(){
  let num1 = 30;
  let num2 = 40;
  let num3 = 50;
  let num4 = 60;
  // let response = await axios.get(`http://numbersapi.com/${rand_num}/trivia?json`)
  let response = await Promise.all([
    axios.get(`http://numbersapi.com/${num1}/trivia?json`),
    axios.get(`http://numbersapi.com/${num2}/trivia?json`),
    axios.get(`http://numbersapi.com/${num3}/trivia?json`),
    axios.get(`http://numbersapi.com/${num4}/trivia?json`)
  ]); 
  
  for (let i=0; i<response.length; i++) {
    $('#facts').append(`<p>${response[i].data.text}</p>`);
  }
}

