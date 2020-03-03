export default {
    formatCurrency: function (num) {
        return '$' + (Math.round(num * 100) / 100).toFixed(2).toLocaleString() + ' ';
    }
}



//  previous bug: return '$' + Number(num.toFixed(2)).toLocaleString() + ' ';