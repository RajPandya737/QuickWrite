function getWord() {
    fetch('/give-word', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const word = data.sentence;
        console.log('Received word:', word);
        document.getElementById('wordDisplay').textContent = word;
      })
      .catch((error) => {
        console.error('Error fetching word:', error);
      });
  }
  
  function placeWord() {
    getWord();
    document.getElementById('getWordButton').addEventListener('click', getWord);
  }
  placeWord();
  window.placeWord = placeWord;
