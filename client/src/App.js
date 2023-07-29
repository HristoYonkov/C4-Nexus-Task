import './App.scss';
import { Route, Routes } from "react-router-dom";

import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Card from './components/Card/Card';
import Details from './container/Details/Details';
import Laptops from './container/Laptops/Laptops';

function App() {

  return (
    <div className="app">
      <Header />
      <main className='app__main'>
        <Routes>
          <Route path='/' element={<Laptops />} />
          <Route path='/monitors' element={<Card />} />
          <Route path='/mouses' element={<Card />} />
          <Route path='/keyboards' element={<Card />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
