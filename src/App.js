import logo from './logo.svg';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <from>
      <input type="text" placeholder="画像を探す" />
      </from>
      <ImageGallery />
    </div>
  );
}

export default App;
