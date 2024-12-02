const url = 'http://api.quotable.io/random';

const getQuote = async() => {
    const data = await fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Fetch Error: ', error));
        
    const { content, author } = data;
    const message = `Content: ${content}\nAuthor: ${author}`;
    console.log(message);
};

getQuote();
console.log('Global');

