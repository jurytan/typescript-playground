let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = '123 Mulberry Ln. New York, NY 12345';
let productName = 'beanie';
let product = {
    name: 'beanie',
    price: '15',
    preOrder: 'false'
};
product = {
    name: 'fanny pack',
    price: '30',
    preOrder: 'true',
};
shipping = Number(product.price) >= 25 ? 0 : 5;
taxPercent = shippingAddress.match('New York') ? .1 : .05;
// console.log(taxPercent);
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log('Product: ' + productName);
console.log('Shipping Address: ' + shippingAddress);
console.log('Product Price: ' + product.price);
console.log('Taxes: ' + taxTotal);
// console.log(product);
if (shipping == 0) {
    console.log('Free shipping!');
}
else {
    console.log('Shipping: ' + shipping);
}
console.log('Total: ' + total);
if (product.preOrder == 'true') {
    console.log('We\'ll send you a message when it\'s on the way');
}
