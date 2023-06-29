const scriptAPI = 'https://script.google.com/macros/s/AKfycbwiRdLo6pMQLff0FTpwhP6whXY2awQPvLsRv-f0YNO2G5ZwarPFfbMKCNksvYqqbHEX/exec';

console.log('Hello world');

getData();


function getData() {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch(scriptAPI + '?nameofdata=items', requestOptions)
        .then(response => response.json())
        .then(items => {
            const results = Object.values(items).map(item => {
                const data = Object.values(item).map(value => `<li>${value}</li>`);
                console.log(`<ul>${data.join('')}</ul>`);
                return `<ul>${data.join('')}</ul>`;
            });
            return results;
        })
        .catch(err => {
            console.log(err);
        });
}