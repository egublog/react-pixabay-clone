import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [inputText, setInputText] = useState("");
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  };

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <from onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </from>
      <ImageGallery />
    </div>
  );
}

export default App;
