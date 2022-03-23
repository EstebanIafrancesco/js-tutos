const PORT = 8000;

const axios = require('axios');
const cheerio = require("cheerio");
const e = require('express');
const express = require("express");

const app = express();

const url = 'https://www.binance.com/es/markets';

app.listen(PORT , () => console.log(`Server running on port: ${PORT}`));

axios(url)
    .then(res => {
        const html = res.data;
        const $ = cheerio.load(html);
        const coins = [];
        const cryptoName = $('.css-17wnpgm', html).each(function(){
            const name = $(this).text();
            coins.push({
                name
            })
        }); 
        console.log(coins);
    })
    .catch(err => console.log(err));




// 800072599*