
import './App.css';
import Header from './Component/Header';
import { Routes, Route } from 'react-router-dom';
import ProductListing from './Component/ProductListing';
import ProductDetails from './Component/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<ProductListing></ProductListing>}></Route>
        <Route path='/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='*'>Not page pound</Route>
      </Routes>
    </div>
  );
}

export default App;
