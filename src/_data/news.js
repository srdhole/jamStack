const axios = require("axios");
require("dotenv").config();
const countries = require("./countries.json");


async function getNews(country) {
    try {
        const response = await axios.get(`https://newsapi.org/v2/sources?country=${country}&apiKey=${process.env.API_KEY}`);
        // return response.data;
        console.log(response.data.sources);
        // console.log(response.data);

        return {
            "country": country,
            "articles": response.data.sources
        }

    }
    catch (error) {
        console.error(error);
    }
}

module.exports = async function () {
    // try {
    //     const response = await axios.get("http://newsapi.org/v2/everything?q=tesla&from=2021-02-08&sortBy=publishedAt&apiKey=6e6bf2b3bcf34132a6d32e734030705c&pageSize=5");
    //     console.log(response.data);
    //     return response.data;
    // }
    // catch (error) {
    //     console.error(error);
    // }
    var newsPromises = countries.map(getNews);
    return Promise.all(newsPromises).then(newsObjects => {
        console.log('newsObjects :', newsObjects);
        return [].concat.apply([], newsObjects);
    });
}