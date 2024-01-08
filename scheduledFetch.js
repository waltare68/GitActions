import fetch from 'node-fetch';
//const fetch = require('node-fetch');

async function sendData() {
  const endpoint = 'https://sports-f25x.vercel.app/api/cronservice';
  const response = await fetch(endpoint, {
    method: 'GET', // or 'GET', 'PUT', etc., depending on your API
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers your API requires
    },
    // Add any body data if required
    // body: JSON.stringify({ key: 'value' }),
  });

  if (response.ok) {
    console.log('Data successfully sent to the API.');
  } else {
    console.error('Failed to send data to the API:', response.status, response.statusText);
  }
}

sendData();