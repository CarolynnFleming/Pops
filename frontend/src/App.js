
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import OfferingScreen from './screens/OfferingScreen';
import BagScreen from './screens/BagScreen';
import popcorn from './assets/popcorn.gif';
import MixesScreen from './screens/MixesScreen';
import About from './screens/About';
import OnegScreen from './screens/OnegScreen'
import BucketScreen from './screens/BucketScreen'
import ContactScreen from './screens/ContactScreen';
import GrabnGoScreen from './screens/GrabnGoScreen';
import SportstinScreen from './screens/SportstinScreen';
import TwogScreen from './screens/TwogScreen';
import ThreegScreen from './screens/ThreegScreen';
import BagDetail from './detail/BagDetail';
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div><a href="/">
            <img className="popcorn"src={popcorn} alt="popcorn"/></a>
            <a href="/" className="brand">WHATS POPPIN</a>
        </div>
    
            
                  
                  <div className="follow">
                  
                  <a className="rainbow-4" href="/offeringscreen">Offerings</a>
                  
                    <a className="rainbow-4" href="/cart">Cart</a>
            <a className="rainbow-4" href="/signIn">Sign In</a>
            
              </div>
        

    </header>
    <main>
      <Routes>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/3gallon tin" element={<ThreegScreen/>}></Route>
      <Route path="/2 gallon tin" element={<TwogScreen/>}></Route>
      <Route path="/1 gallon sports tin" element={<SportstinScreen/>}></Route>
      <Route path="/1 gallon" element={<OnegScreen/>}></Route>
      <Route path="/bucket" element={<BucketScreen/>}></Route>
      <Route path="/Grab & Go" element={<GrabnGoScreen/>}></Route>
      <Route path="/contactscreen" element={<ContactScreen/>}></Route>
      <Route path="/offeringscreen" element={<OfferingScreen/>}></Route>
      <Route path="/offeringscreen" element={<OfferingScreen/>}></Route>
      <Route path="/bags/:id" element={<BagDetail/>}></Route>
      <Route path="/bags" element={<BagScreen/>}></Route>
      <Route path="/mixes bags" element={<MixesScreen/>}></Route>
      <Route path="/" element={<HomeScreen/>} exact></Route>
      </Routes>
      
    </main>
    <footer className="bottom">
    <a className="rainbow-4" href="/contactscreen">Contact</a>
        All rights reserved
        <a className="rainbow-4" href="/about">About</a>
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
