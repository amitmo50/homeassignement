import React, {useState, useEffect} from 'react';
import './App.css';
import { commerce } from './lib/commerce';
import { ProductCards, TopBar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProduct = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }
  const handleCaptureCheckout = () => {
    try{
      refreshCart();
    } catch(error) {
      setErrorMessage(error.data.error.message);
    }
  }

  useEffect(() => {
    fetchCart();
    fetchProduct();
  }, []);

  return (
    <div className="App">
      <Router>
          <TopBar cart={cart}/>
          <Switch>
            <Route exact path="/">
              <ProductCards products={products} onAddToCart={handleAddToCart}/>
            </Route>
            <Route exact path="/cart">
              <Cart 
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
              />
            </Route>
            <Route exact path="/checkout">
              <Checkout onCaptureCheckout={handleCaptureCheckout} error={errorMessage} cart={cart}/>
            </Route>
            {/* <PopUp/> */}
          </Switch>
      </Router>
    </div>
  );
}

export default App;
