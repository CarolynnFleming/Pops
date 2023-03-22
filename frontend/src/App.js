
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
import GngDetail from './detail/GngDetail';
import MixesDetail from './detail/MixesDetail';
import BucketDetail from './detail/BucketDetail';
import OnegDetail from './detail/OnegDetail';
import SportstinDetail from './detail/SportstinDetail';
import TwogDetail from './detail/TwogDetail';
import ThreegDetail from './detail/ThreegDetail';
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
      <Route path="/threeg" element={<ThreegScreen/>}></Route>
      <Route path="/threeg/:id" element={<ThreegDetail/>}></Route>
      <Route path="/twog" element={<TwogScreen/>}></Route>
      <Route path="/twog/:id" element={<TwogDetail/>}></Route>
      <Route path="/sportstin" element={<SportstinScreen/>}></Route>
      <Route path="/sportstin/:id" element={<SportstinDetail/>}></Route>
      <Route path="/oneg" element={<OnegScreen/>}></Route>
      <Route path="/bucket" element={<BucketScreen/>}></Route>
      <Route path="/Gng" element={<GrabnGoScreen/>}></Route>
      <Route path="/contactscreen" element={<ContactScreen/>}></Route>
      <Route path="/offeringscreen" element={<OfferingScreen/>}></Route>
    
      <Route path="/Bags/:id" element={<BagDetail/>}></Route>
      <Route path="/Gng/:id" element={<GngDetail/>}></Route>
      <Route path="/Bags" element={<BagScreen/>}></Route>
      <Route path="/bucket/:id" element={<BucketDetail/>}></Route>
      <Route path="/mixesbags" element={<MixesScreen/>}></Route>
      <Route path="/mixesbags/:id" element={<MixesDetail/>}></Route>
      <Route path="/oneg/:id" element={<OnegDetail/>}></Route>
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
