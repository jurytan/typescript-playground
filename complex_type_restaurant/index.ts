import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(priceBracket: PriceBracket): number {
  switch(priceBracket) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
    default:
      // this should never happen
      return -1;
  }
}
/// Add your getOrders() function below:
function getOrders(priceBracket: PriceBracket, orders: Order[][]): Order[][]{
  let maxPrice = getMaxPrice(priceBracket);
  let filteredOrders: Order[][] = [];
  
  orders.forEach(order => 
      filteredOrders.push(order.filter((item: Order) => 
          item.price <= maxPrice)));
  
  return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], filteredOrders: Order[][]) {
  restaurants.forEach((restaurant, index) => {
    if (filteredOrders[index].length != 0) {
      console.log(restaurants[index].name);
      filteredOrders[index].forEach(order => 
          console.log('- ' + order.name + ': $' + order.price));
    }
  });
}

/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
// console.log(elligibleOrders);
printOrders(restaurants, elligibleOrders);
