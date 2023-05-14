import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import '../style/japanmatsuri.css';
import logo from "../assets/images/icon/Vector.png";

const baseUrl = 'http://localhost:5000/products';

function App() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [query] = useDebounce(text, 1000);
  const [products, setProducts] = useState([]);

  const searchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(baseUrl);
      const data = await response.json();
      const filteredProducts = data.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (query.trim() !== '') {
      searchProducts();
    } else {
      setProducts([]);
    }
  }, [query]);

  const handleSearch = () => {
    searchProducts(); // Call the searchProducts function directly
  };

  return (
    <div className="App">
      <div className="form-wrapper">
        <input
          type="text"
          placeholder="search here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSearch}>submit</button>
      </div>
      <div className="container-search">
        {loading && <div>loading...</div>}
        {!loading &&
          products &&
          products.map((product) => (
            <div className="tours-card" key={product.id}>
              <img src={product.url} alt={product.title} className="image" />
              <div className="tours-detail">
                <h2>{product.name}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
