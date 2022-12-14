import {Component, h, State} from '@stencil/core';
import {Product} from "./product.model";

@Component({
  tag: 'app-product-listing',
  styleUrl: 'app-product-listing.css',
  shadow: true,
})
export class AppProductListing {

  @State() products?: Product[];

  componentWillLoad() {
    return fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then((products: Product[]) => {
        this.products = products;
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div class="page">
        <div class="content">
          <h1>Products</h1>
            <table>
            {this.products?.map((product: Product) => (
              <tr>
                <td>
                  <img src={product.image} />
                </td>
                <td>
                  { product.title }
                </td>
                <td>
                  <stencil-route-link url={`/product/${product.id}`}>
                    <button>show</button>
                  </stencil-route-link>
                </td>
              </tr>
            ))}
            </table>
        </div>
        <div class="sidebar">
          <app-cart></app-cart>
        </div>
      </div>
    );
  }
}
