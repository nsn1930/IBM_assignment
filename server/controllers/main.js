const finnhub = require('finnhub');

module.exports = {
    sendData: async (req, res) => {
        const finnhub = require('finnhub');

        const api_key = finnhub.ApiClient.instance.authentications['api_key'];
        api_key.apiKey = "cbqet6aad3i9b8tfgu70"
        const finnhubClient = new finnhub.DefaultApi()

        finnhubClient.companyProfile2({'symbol': 'AAPL'}, (error, data, response) => {
            console.log(data)
            res.send({success: true, apiData: data})

        });

    },
    sendNudesOk: async (req, res) => {

    }

}

