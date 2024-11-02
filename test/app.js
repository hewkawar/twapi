const twApi = require("../src");

async function main() {
    const tw = await twApi("https://gift.truemoney.com/campaign/?v=019073d20cd07e5caa9d198a1ebe7080acL", "0610739386");

    console.log(tw);
    
}

main();