import data from './data';
import Offering from './components/Offering';
function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <img className="popcorn"src="./public/popcorn.gif" alt="popcorn"/>
            <a href="/" className="brand">WHATS POPPIN</a>
        </div>
    
            
                  
                  <div className="follow">
                    <a className="rainbow-4" href="/cart">Cart</a>
            <a className="rainbow-4" href="/signIn">Sign In</a>
                  
              </div>
        

    </header>
    <main>
      <div>
        <div className="row center">
          {
            data.offering.map((offering) =>(
              <Offering key={offering._id} offering={offering}></Offering>

            ))
          }
            
            </div>
          </div>
    </main>
    <footer className="row center">
        All rights reserved
    </footer>
</div>
  );
}

export default App;
