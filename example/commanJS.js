const { twApi } = require("truewalletvoucher");

async function redeem(code) {
    const voucher = await twApi(code, '[เบอร์โทร]');
    switch (voucher.status.code) {
        case "SUCCESS":
            console.log('ไดรับเงินแล้วจำนวน' + voucher.data.my_ticket.amount_baht)
            break;
        case "CANNOT_GET_OWN_VOUCHER":
            console.log('รับซองตัวเองไม่ได้')
            break;
        case "TARGET_USER_NOT_FOUND":
            console.log('ไม่พบเบอร์นี้ในระบบ')
            break;
        case "INTERNAL_ERROR":
            console.log('ไม่ซองนี้ในระบบ หรือ URL ผิด')
            break;
        case "VOUCHER_OUT_OF_STOCK":
            console.log('มีคนรับไปแล้ว')
            break;
        case "VOUCHER_NOT_FOUND":
            console.log('ไม่พบซองในระบบ')
            break;
        case "VOUCHER_EXPIRED":
            console.log('ซองวอเลทนี้หมดอายุแล้ว')
            break;
        default:
            break;
    }
}