import "./App.css";
import Shorten from "./components/Shorten";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [shortenedUrls, setShortenedUrls] = useState([]);
  function addUrl(item) {
    setShortenedUrls([item, ...shortenedUrls]);
  }
  return (
    <>
      <Shorten addUrl={addUrl} />
      <List items={shortenedUrls} />
    </>
  );
}

export default App;
