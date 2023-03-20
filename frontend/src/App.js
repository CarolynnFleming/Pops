
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import OfferingScreen from './screens/OfferingScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div><a href="/">
            <img className="popcorn"src="./public/popcorn.gif" alt="popcorn"/></a>
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
      <Route path="/offeringscreen" element={<OfferingScreen/>}></Route>
      <Route path="/" element={<HomeScreen/>} exact></Route>
      </Routes>
      
    </main>
    <footer className="row center">
        All rights reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
