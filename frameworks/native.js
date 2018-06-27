
<fruit-list></fruit-list>

const fruits = ['Apples', 'Oranges', 'Bananas'];
class FruitList extends HTMLElement {
  get template() {
    return html`
      <ul>
        ${ fruits.forEach(fruit => html`<li>${ fruit }</li>`) }
      </ul>
    `;
  }
}

customElements.define('fruit-list', FruitList);

