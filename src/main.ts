import './style.css'

const form = document.querySelector('form');

form?.addEventListener('Submit', async (e) => {
  // this will prevent the page from refreshing
  e.preventDefault();
  const data = new FormData(form);

  const response = await fetch('http://localhost:8080/dream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: data.get('prompt'),
    }),
  });

  const { image } = await response.json();

  const result = document.querySelector('#result');
  if (result !== null) {
    result.innerHTML = `<img src="${image}" width="512" />`;
  }
  else {
    throw('No result, an error has occured');
  }

});