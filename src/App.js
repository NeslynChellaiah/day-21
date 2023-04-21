import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Fancy Product",
      price: "$40.00 - $80.00",
      rating: 5,
      isAddedToCart: false,
      id: 1,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Special item",
      price: "$18.00",
      rating: 5,
      isAddedToCart: false,
      id: 2,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sale item",
      price: "$25.00",
      rating: 4,
      isAddedToCart: false,
      id: 3,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Popular item",
      price: "$40.00",
      rating: 3,
      isAddedToCart: false,
      id: 4,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Sale item",
      price: "$25.00",
      rating: 5,
      isAddedToCart: false,
      id: 5,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Fancy Product",
      price: "$140.00 - $180.00",
      rating: 4,
      isAddedToCart: false,
      id: 6,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Special item",
      price: "$18.00",
      rating: 5,
      isAddedToCart: false,
      id: 7,
    },
    {
      imgSrc: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Popular item",
      price: "$40.00",
      rating: 5,
      isAddedToCart: false,
      id: 8,
    },
  ]);

  const addToCart = (id) => {
    items.forEach((item) => {
      if (id === item.id) {
        item.isAddedToCart = true;
        setCount(count + 1);
      }
    });
    setItems([...items]);
  };

  const removeItems = () => {
    items.forEach((item) => {
      item.isAddedToCart = false;
    });
    setCount(0);
    setItems([...items]);
  };

  return (
    <div className="App">
      <Navbar count={count} removeItems={removeItems} />
      <Header />
      <Section items={items} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
