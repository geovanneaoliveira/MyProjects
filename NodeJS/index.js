const axios = require('axios');
const options = {
  method: 'POST',
  url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
  params: {
    'to[0]': 'pt-br',
    'api-version': '3.0',
    profanityAction: 'NoAction',
    textType: 'plain'
  },
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '41315fceddmsh3a2993908a4ae06p1767ffjsn5c6270928703',
    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
  },
  data: '[{"Text":"How are you doing?."}]'
};

axios.request(options).then(function (response) {
	console.log(response.data[0].translations[0].text);
}).catch(function (error) {
	console.error(error);
});

const getRemoteData = (url) => new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? require('https') : require('http');
    const request = client.get(url, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error(`Failed with status code: ${response.statusCode}`));
      }
      const body = [];
      response.on('data', (chunk) => body.push(chunk));
      response.on('end', () => resolve(body.join('')));
    });
    request.on('error', (err) => reject(err));
  });

  async function getRandomQuote(){
    let response = await getRemoteData('https://animechan.vercel.app/api/random');
    return await JSON.parse(response);
}