const axios = require("axios")

class util {
    static async sendRequest(method, endpoint, data, headers) {
        return new Promise(async (resolve, reject) => {
            await axios.request({
                url: endpoint,
                method: method,
                data: data,
                headers: headers
            }).then(function (response) {
                return resolve(response)
            }).catch(function (error) {
                return resolve(error)
            })
        })
    }
}

module.exports = { util }