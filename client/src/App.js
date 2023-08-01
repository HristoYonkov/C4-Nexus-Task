import { useEffect, useState } from 'react';
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
  const [backupLaptops, setBackupLaptops] = useState(laptopsData);
  const [laptopsState, setLaptopsState] = useState(backupLaptops);

  const [backupMonitors, setBackupMonitors] = useState(monitorsData);
  const [monitorsState, setMonitorsState] = useState(backupMonitors);

  const [backupPhones, setBackupPhones] = useState(phonesData);
  const [phonesState, setPhonesState] = useState(backupPhones);

  const [backupTablets, setBackupTablets] = useState(tabletsData);
  const [tabletsState, setTabletsState] = useState(backupTablets);

  return (
    <div className="app">
      <Header />
      <main className='app__main'>
        <Routes>
          <Route path='/' element={
            <Laptops
              state={laptopsState}
              setCurrentState={setLaptopsState}
              originalState={backupLaptops}
            />}
          />

          <Route path='/monitors' element={
            <Monitors
              state={monitorsState}
              setCurrentState={setMonitorsState}
              originalState={backupMonitors}
            />}
          />

          <Route path='/phones' element={
            <Phones
              state={phonesState}
              setCurrentState={setPhonesState}
              originalState={backupPhones}
            />}
          />

          <Route path='/tablets' element={
            <Tablets
              state={tabletsState}
              setCurrentState={setTabletsState}
              originalState={backupTablets}
            />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
