import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.scss';

import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Laptops from './container/Laptops/Laptops';
import Monitors from './container/Monitors/Monitors';
import Phones from './container/Phones/Phones';
import Tablets from './container/Tablets/Tablets';

import laptopsData from './data/laptopsData';
import monitorsData from './data/monitorsData';
import phonesData from './data/phonesData';
import tabletsData from './data/tabletsData';

function App() {
  const [buyedProducts, setBuyedProducts] = useState(0);

  const [laptopsState, setLaptopsState] = useState(laptopsData);
  const [monitorsState, setMonitorsState] = useState(monitorsData);
  const [phonesState, setPhonesState] = useState(phonesData);
  const [tabletsState, setTabletsState] = useState(tabletsData);

  return (
    <div className="app">
      <Header buyedProducts={buyedProducts} />
      <main className='app__main'>
        <Routes>
          <Route path='/' element={
            <Laptops
              state={laptopsState}
              setCurrentState={setLaptopsState}
              setBuyedProducts={setBuyedProducts}
            />}
          />

          <Route path='/monitors' element={
            <Monitors
              state={monitorsState}
              setCurrentState={setMonitorsState}
              setBuyedProducts={setBuyedProducts}
            />}
          />

          <Route path='/phones' element={
            <Phones
              state={phonesState}
              setCurrentState={setPhonesState}
              setBuyedProducts={setBuyedProducts}
            />}
          />

          <Route path='/tablets' element={
            <Tablets
              state={tabletsState}
              setCurrentState={setTabletsState}
              setBuyedProducts={setBuyedProducts}
            />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
