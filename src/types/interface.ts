export interface twDataResponse {
    status: {
        message: string;
        code: twResponseStatus;
    };
    data?: {
        voucher: Voucher,
        owner_profile: {
            full_name: string,
        },
        my_ticket: {
            amount_baht: string,
        }
    }
}

export type twResponseStatus = "SUCCESS" | "CANNOT_GET_OWN_VOUCHER" | "TARGET_USER_NOT_FOUND" | "INTERNAL_ERROR" | "VOUCHER_OUT_OF_STOCK" | "VOUCHER_NOT_FOUND" | "VOUCHER_EXPIRED";

export interface Voucher {
    voucher_id: string
    amount_baht: string
    redeemed_amount_baht: string
    member: number
    status: string
    link: string
    detail: string
    expire_date: number
    type: string
    redeemed: number
    available: number
};

export type twResponse = twDataResponse;