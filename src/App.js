import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [inputText, setInputText] = useState("");
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    const API_KEY = '30631304-504e1a4f405e428c58b536e1a';
    // APIのURL
    const endpointURL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + ref.current.value + '&image_type=photo';

    // APIを叩く(データフェッチング)
    fetch(endpointURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInputText(data.hits);
      })
      .catch((error) => {
        console.log(error);
      });

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
