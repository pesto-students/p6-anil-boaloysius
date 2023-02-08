import Shorten from "../components/Shorten";
import List from "../components/List";
import { useState } from "react";

function Home() {
  const [shortenedUrls, setShortenedUrls] = useState([]);
  function addUrl(item) {
    setShortenedUrls([item, ...shortenedUrls]);
  }
  function searchUrlList(url) {
    return shortenedUrls.find((item) => item.fullUrl === url);
  }
  return (
    <div className="home">
      <Shorten addUrl={addUrl} searchUrlList={searchUrlList} />
      <List items={shortenedUrls} />
    </div>
  );
}

export default Home;
