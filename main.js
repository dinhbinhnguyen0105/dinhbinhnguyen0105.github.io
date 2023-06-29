const scriptAPI = 'https://script.google.com/macros/s/AKfycbwiRdLo6pMQLff0FTpwhP6whXY2awQPvLsRv-f0YNO2G5ZwarPFfbMKCNksvYqqbHEX/exec';


const dataBtnElm = document.querySelector('#get-data');
const containerElm = document.querySelector('#container');

dataBtnElm.addEventListener('click', () => {
    console.log('Hello world');
    getData();
})

function getData() {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch(scriptAPI + '?nameofdata=items', requestOptions)
        .then(response => response.json())
        .then(items => {
            dataBtnElm.style.display = 'none';
            const results = Object.values(items).map(item => {
                const data = Object.values(item).map(value => `<li>${value}</li>`)
                return `<ul>${data.join('')}</ul>`;
            });
            containerElm.innerHTML = `<ul>${results.join('')}</ul>`;
        })
        .catch(err => {
            console.log(err);
            dataBtnElm.style.display = 'block';
        });
}


// acreage: 100
// building_line: "đường xe hơi"
// category: "nhà"
// construction: "1 trệt, 1 lầu"
// description: "↵+ 5pn (2 phòng đôi, 3 phòng đơn)↵+ trang thiết bị có sẵn (tv, tủ lạnh, bếp, máy giặt, giường, tủ, ..)↵+ có gara xe hơi↵+ cọc 3 đóng 3"
// function: "1pk, 1 bếp, 5pn, 2wc"
// furniture: "nội thất cao cấp"
// id: 1687489101145
// images: "11ohJv4sMOaq2R01Fq9CQUu50-5B4yFi9"
// legal: "----- select item -----"
// price: 13
// source: null
// street_name: "cao thắng"
// type: "cho thuê"
// ward: 7