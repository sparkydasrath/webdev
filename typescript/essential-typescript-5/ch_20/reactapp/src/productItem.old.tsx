import { Component, ChangeEvent } from 'react';
import { Product } from './data/entities';

interface Props {
    product: Product;
    callback: (product: Product, quantity: number) => void;
}

interface State {
    quantity: number;
}

export class ProductItem extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    render() {
        return <div className="card m-1 p-1 bg-light">
            <h4>
                {this.props.product.name}
                <span className="badge rounded-pill bg-primary float-end">
                    ${this.props.product.price.toFixed(2)}
                </span>
            </h4>
            <div className="card-text bg-white p-1">
                {this.props.product.description}
                <button className="btn btn-success btn-sm float-end"
                    onClick={this.handleAddToCart} >
                    Add To Cart
                </button>
                <select className="form-control-inline float-end m-1"
                    onChange={this.handleQuantityChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        </div>
    }

    handleQuantityChange = (ev: ChangeEvent<HTMLSelectElement>): void =>
        this.setState({ quantity: Number(ev.target.value) });

    handleAddToCart = (): void =>
        this.props.callback(this.props.product, this.state.quantity);
}