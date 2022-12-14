import {Component, Prop, h, State, EventEmitter, Event} from '@stencil/core';
import { MatchResults } from '@stencil-community/router';
import {Product} from "../app-product-listing/product.model";

@Component({
  tag: 'app-product',
  styleUrl: 'app-product.css',
  shadow: true,
})
export class AppProduct {
  @Prop() match: MatchResults;

  @State() productId: number;
  @State() product: Product;

  @Event({
    eventName: 'productAddedToCart',
    composed: true,
    cancelable: true,
    bubbles: true
  }) productAddedToCart: EventEmitter<Product>;

  componentWillLoad() {
    if (this.match?.params.id) {

      this.productId = +this.match?.params.id;

      return fetch(`https://fakestoreapi.com/products/${this.productId}`)
      .then(response => response.json())
      .then((product: Product) => {
        this.product = product;
      }).catch((error) => {
        console.error(error);
      });
    }
  }

  addToCart = (): void => {
    this.productAddedToCart.emit(this.product);
  }

  render() {
    return (<div>
      <div class="top-link">
        <stencil-route-link url={`/`}>
          <button>back to products</button>
        </stencil-route-link>
      </div>
      <div class="page">
        <div class="content">
          {this.product ?
            (
              <div>
                <h1>{this.product.title}</h1>
                <img src={this.product.image} />
                <p>{this.product.description}</p>
                <p>Price: ${this.product.price}</p>
                <button onClick={this.addToCart}>add to cart</button>
              </div>
            ) : (
            <div>Product does not exist.</div>
            )
          }
        </div>
        <div class="sidebar">
          <app-cart></app-cart>
        </div>
      </div>
    </div>)
  }
}
