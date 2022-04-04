import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Order from './components/Orders/Order';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/orders' element={<Order />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
