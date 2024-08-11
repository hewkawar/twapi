const twResponse = {
    status: {
        message: String,
        code: String,
    },
    data: {
        voucher: {
            voucher_id: String,
            amount_baht: String,
            redeemed_amount_baht: String,
            member: Number,
            status: String,
            link: String,
            detail: String,
            expire_date: Number,
            type: String,
            redeemed: Number,
            available: Number,
        },
        owner_profile: {
            full_name: String,
        },
        my_ticket: {
            amount_baht: String,
        }
    }
}

module.exports = twResponse;