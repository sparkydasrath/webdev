import { AbstractDataSource } from "./abstractDataSource";
import { Product, Order } from "./entities";
import Axios from "axios";

const protocol = "http";
const hostname = "localhost";
const port = 4600;

const urls = {
    products: `${protocol}://${hostname}:${port}/products`,
    orders: `${protocol}://${hostname}:${port}/orders`
}

export class RemoteDataSource extends AbstractDataSource {
    constructor() {
        super();
    }

    loadProducts(): Promise<Product[]> {
        return Axios.get(urls.products).then(response => response.data);
    }

    async getProducts(): Promise<Product[]> {
        const response = await Axios.get(urls.products);
        return response.data;
    }

    async getOrders(): Promise<Order[]> {
        const response = await Axios.get(urls.orders);
        return response.data;
    }

    storeOrder(): Promise<number> {
        let orderData = {
            lines: [...this.order.orderLines.values()].map(ol => ({
                productId: ol.product.id,
                productName: ol.product.name,
                quantity: ol.quantity
            }))
        }
        return Axios.post(urls.orders, orderData)
            .then(response => response.data.id);
    }
}