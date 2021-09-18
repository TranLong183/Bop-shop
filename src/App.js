import Header from './Header';
import Hero from './Hero';
import Promo from './Promo';
import ProductList from './ProductList';
import Footer from './Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Promo/>
      <ProductList></ProductList>
      <Footer></Footer>
    </div>
  );
}

export default App;
