import {Component, h, Listen, State} from '@stencil/core';
import {Product} from "../app-product-listing/product.model";

export type CartProduct = Product & {amount: number};

@Component({
  tag: 'app-cart',
  styleUrl: 'app-cart.css',
  shadow: true,
})
export class AppCart {
  @State() cartProducts?: CartProduct[];
  private readonly cartSessionStorageKey: string = 'dhbw-shop-cart';

  @Listen('productAddedToCart', {target: 'body'})
  productAddedToCartHandler(event: CustomEvent<Product>) {
    const currentStoredProducts: CartProduct[] = this.getProductsFromCart();

    const productFromCart: CartProduct = currentStoredProducts.find((product: CartProduct): boolean => product.id === event.detail.id);
    if (productFromCart) {
      productFromCart.amount++;
    } else {
      const addedProduct: CartProduct = event.detail as CartProduct;
      addedProduct.amount = 1;

      currentStoredProducts.push(addedProduct);
    }
    window.sessionStorage.setItem(this.cartSessionStorageKey, JSON.stringify(currentStoredProducts));
    this.cartProducts = this.getProductsFromCart();
  }

  componentWillLoad() {
    this.cartProducts = this.getProductsFromCart();
  }

  render() {
    return <div>
      <h2>Cart</h2>
      {this.cartProducts?.length > 0 ?
      <table>
        <thead>
        <tr>
          <th>Amount</th>
          <th>Article</th>
          <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
          {this.cartProducts?.map((product: CartProduct) => (
            <tr>
              <td>{product.amount}</td>
              <td>{product.title}</td>
              <td><button onClick={() => this.removeFromCart(product.id)}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table> :
        <p>No products in cart.</p>
      }
    </div>
  }

  private removeFromCart(productId: number): void {
    const currentStoredProducts: CartProduct[] = this.getProductsFromCart().filter((product: Product): boolean => product.id !== productId);

    window.sessionStorage.setItem(this.cartSessionStorageKey, JSON.stringify(currentStoredProducts));
    this.cartProducts = this.getProductsFromCart();

  }

  private getProductsFromCart(): CartProduct[] {
    if(window.sessionStorage.getItem(this.cartSessionStorageKey)) {
      return [...JSON.parse(window.sessionStorage.getItem(this.cartSessionStorageKey))];
    } else {
      return [];
    }
  }
}
