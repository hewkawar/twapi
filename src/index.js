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
    try {
        const response = await axios.post(
            `https://gift.truemoney.com/campaign/vouchers/${code}/redeem`,
            { mobile: phoneNumber },
            {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36 Edg/84.0.522.52",
                    "Content-Type": "application/json",
                },
                httpsAgent: new Agent({
                    maxVersion: "TLSv1.3",
                    minVersion: "TLSv1.3",
                }),
            }
        );
        return response.data;
    } catch (error) {
        // Check if error.response exists, otherwise return a custom error message
        if (error.response) {
            return error.response.data;
        } else {
            return { error: "Network or server error. Please try again later." };
        }
    }
};

module.exports = twApi;