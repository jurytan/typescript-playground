"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(priceBracket) {
    switch (priceBracket) {
        case orders_1.PriceBracket.Low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
        default:
            // this should never happen
            return -1;
    }
}
/// Add your getOrders() function below:
function getOrders(priceBracket, orders) {
    let maxPrice = getMaxPrice(priceBracket);
    let filteredOrders = [];
    orders.forEach(order => filteredOrders.push(order.filter((item) => item.price <= maxPrice)));
    return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(restaurants, filteredOrders) {
    restaurants.forEach((restaurant, index) => {
        if (filteredOrders[index].length != 0) {
            console.log(restaurants[index].name);
            filteredOrders[index].forEach(order => console.log('- ' + order.name + ': $' + order.price));
        }
    });
}
/// Main
const elligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
// console.log(elligibleOrders);
printOrders(restaurants_1.restaurants, elligibleOrders);
