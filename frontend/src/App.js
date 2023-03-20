import data from './data';
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
        <div className="row center">
          {
            data.products.map(product =>(
<div key={product._id}className="card">
                <a href={`/product/${product._id}`}>
                    <img className="medium"src={product.image} alt="popcorn bags"/>
                </a>
                <div className="card-body">
                    <a href={`/product/${product._id}`}><h2>{product.name}</h2>
                    </a>
                    <div className="rating">
                        <span>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </span>
                    </div>
                  <div className="detail">{product.flavors} Flavors Available<br/> {product.sizes}Sizes Available</div>
                </div>
            </div>
            ))
          }
            
            </div>

    </main>
    <footer className="row center">
        All rights reserved
    </footer>
</div>
  );
}

export default App;
