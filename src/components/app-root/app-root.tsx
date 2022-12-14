import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>My Webshop</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-product-listing" exact={true} />
              <stencil-route url="/product/:id" component="app-product" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
