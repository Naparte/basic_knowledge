/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {

};
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let result = [];

    prices.forEach((val, index) => {
        let minVal = prices.find((v, i) => {
            return v <= val && i > index;
        });

        if (minVal > -1) {
            result.push(val - minVal);
        } else {
            result.push(val)
        }
    });

    return result;
};