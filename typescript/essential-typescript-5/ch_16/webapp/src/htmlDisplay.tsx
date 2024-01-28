import { Product, Order } from './data/entities';

export class HtmlDisplay {
    props: {
        products: Product[],
        order: Order
    }

    getContent(): HTMLElement {
        return <h3 className="bg-secondary text-center text-white p-2">
            {this.getElementText()}
        </h3>
    }

    getElementText() {
        return `${this.props.products.length} Products, `
            + `Order total: $${this.props.order.total}`;
    }
}