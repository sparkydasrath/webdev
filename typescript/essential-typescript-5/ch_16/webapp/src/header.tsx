import { createElement } from "./tools/jsxFactory";
import { Order } from "./data/entities";

export class Header {
    props: {
        order: Order;
        callback: () => void;
    };
    getContent(): HTMLElement {
        return (
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <strong>Order Details</strong>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}