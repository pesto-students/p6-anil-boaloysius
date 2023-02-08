import { useContext, useState } from "react";
import axios from "axios";
import "../css/shorten.scss";
import CacheContext from "../context/CacheContext";

function Shorten() {
  const [input, setInput] = useState("");
  const { addToCache, searchCache } = useContext(CacheContext);

  const fetchData = async () => {
    const endpoint = "https://api.shrtco.de/v2/shorten?url=";
    const stringToShorten = encodeURIComponent(input);
    const finalUrl = endpoint + stringToShorten;
    try {
      const { data } = await axios.get(finalUrl);
      addToCache({
        id: Math.floor(Math.random() * 1000000),
        fullUrl: input,
        shortUrl: data.result.full_short_link,
      });
    } catch (e) {
      alert(e.message);
    }
  };

  const onClick = () => {
    const result = searchCache(input);
    console.log(result);
    if (result) {
      alert(`Found in cache:\n${result.fullUrl}: ${result.shortUrl}`);
    } else fetchData();
  };

  return (
    <div className="shorten">
      <input
        value={input}
        placeholder="Please add the URL"
        onChange={(val) => setInput(val.target.value)}
      />
      <button onClick={onClick} disabled={!input}>
        Shorten url
      </button>
    </div>
  );
}

export default Shorten;
