import axios from "axios";
import { Agent } from "https";
import { twResponse } from "./types/interface";

export async function twApi(voucher: string, phoneNumber: string): Promise<twResponse> {
    const code = voucher.replace("https://gift.truemoney.com/campaign/?v=", "");
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
        if (axios.isAxiosError(error) && error.response) {
            return error.response.data;
        } else {
            return { error: "Network or server error. Please try again later." };
        }
    }
}