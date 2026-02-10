export function formatMoney(amountcents){
    return `$${(amountcents / 100).toFixed(2)}`
}