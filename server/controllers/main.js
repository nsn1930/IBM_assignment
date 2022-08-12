const finnhub = require('finnhub');

module.exports = {
    sendData: async (req, res) => {
        const finnhub = require('finnhub');

        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = "cbqejc2ad3i9b8tfgoug"
        const finnhubClient = new finnhub.DefaultApi()

        finnhubClient.companyProfile2({ 'symbol': 'TSLA' }, (error, data, response) => {
            console.log(data)
            res.send({ success: true, apiData: data })

        });

    },
    symbolSearch: async (req, res) => {
        const finnhub = require('finnhub');

        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = "cbqejc2ad3i9b8tfgoug"
        const finnhubClient = new finnhub.DefaultApi()

        finnhubClient.symbolSearch('tesla', (error, data, response) => {
            console.log(data)
            res.send({ success: true, symbolData: data })
        });
    }

}

