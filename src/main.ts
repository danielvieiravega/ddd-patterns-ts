import Address from "./entity/address";
import Customer from "./entity/customer";	
import Order from "./entity/order";
import OrderItem from "./entity/order_item";
let customer = new Customer("123", "John");
const addres = new Address("Street", 1, "City", "Zip");
customer.Address = addres;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "1", 2);
const item2 = new OrderItem("2", "Item 2", 20, "2", 2);

const order = new Order("1", "123", [item1, item2]);