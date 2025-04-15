export interface twSuccessResponse {
    status: {
        message: string;
        code: "SUCCESS";
    };
    data: {
        voucher: Voucher,
        owner_profile: {
            full_name: string,
        },
        my_ticket: {
            amount_baht: string,
        }
    }
}

export interface twErrorCannotGetOwnVoucherResponse {
    status: {
        message: string;
        code: "CANNOT_GET_OWN_VOUCHER";
    };
    data: {
        voucher: Voucher,
        owner_profile: {
            full_name: string,
        },
        my_ticket: {
            amount_baht: string,
        }
    }
}

export interface twErrorTargetUserNotFoundResponse {
    status: {
        message: string;
        code: "TARGET_USER_NOT_FOUND";
    };
    data: {
        voucher: Voucher,
        owner_profile: {
            full_name: string,
        },
        my_ticket: {
            amount_baht: string,
        }
    }
}

export interface twErrorInternalErrorResponse {
    status: {
        message: string;
        code: "INTERNAL_ERROR";
    };
    data: null;
}

export interface twErrorVoucherOutOfStockResponse {
    status: {
        message: string;
        code: "VOUCHER_OUT_OF_STOCK";
    };
    data: {
        voucher: Voucher,
        owner_profile: {
            full_name: string,
        },
        my_ticket: {
            amount_baht: string,
        }
    };
}

export interface twErrorVoucherNotFoundResponse {
    status: {
        message: string;
        code: "VOUCHER_NOT_FOUND";
    };
    data: null;
}

export interface twErrorVoucherExpiredResponse {
    status: {
        message: string;
        code: "VOUCHER_EXPIRED";
    };
    data: {
        voucher: Voucher,
        owner_profile: {
            full_name: string,
        },
        my_ticket: {
            amount_baht: string,
        }
    }
}

export type twErrorResponse = twErrorCannotGetOwnVoucherResponse | twErrorTargetUserNotFoundResponse | twErrorInternalErrorResponse | twErrorVoucherOutOfStockResponse | twErrorVoucherNotFoundResponse | twErrorVoucherExpiredResponse;

export interface NetworkErrorResponse {
    error: "Network or server error. Please try again later."
};

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

export type twResponse = twSuccessResponse | twErrorResponse | NetworkErrorResponse;