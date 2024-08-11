const { default: axios } = require("axios");
const { Agent } = require("https");

const twResponse = require("./interfaces/twResponse");

/**
 * TwApi
 * @param {string} code 
 * @param {string} phoneNumber 
 * @returns {Promise<twResponse>}
 */
const twApi = async (code, phoneNumber) => {
    code = code.replace("https://gift.truemoney.com/campaign/?v=", "");
    const data = await axios.post({
        url: `https://gift.truemoney.com/campaign/vouchers/${code}/redeem`,
        data: { mobile: phoneNumber },
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36 Edg/84.0.522.52",
            "Content-Type": "application/json",
        },
        httpsAgent: new Agent({
            maxVersion: "TLSv1.3",
            minVersion: "TLSv1.3",
        }),
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        return error.response.data;
    });

    return data;
};

module.exports = twApi;