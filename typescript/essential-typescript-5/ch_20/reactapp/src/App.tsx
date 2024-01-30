import React, { FunctionComponent, useState } from 'react';
import { Product, ProductSelection, ProductSelectionMutations }
  from './data/entities';
import { ProductList } from './productList';

let testData: Product[] = [1, 2, 3, 4, 5].map(num =>
({
  id: num, name: `Prod${num}`, category: `Cat${num % 2}`,
  description: `Product ${num}`, price: 100
}))

export const App: FunctionComponent = () => {

  const [selections, setSelections] = useState(Array<ProductSelection>());

  const addToOrder = (product: Product, quantity: number) => {
    setSelections(curr => {
      ProductSelectionMutations.addProduct(curr, product, quantity);
      return [...curr];
    });
  };

  const categories = [...new Set(testData.map(p => p.category))];

  return <div className="App">
    <ProductList products={testData}
      categories={categories}
      selections={selections}
      addToOrder={addToOrder} />
  </div>
}

export default App;