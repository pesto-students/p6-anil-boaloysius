import { useEffect, useState } from "react";
import axios from "axios";
import "../css/shorten.scss";

function Shorten({ addUrl, searchUrlList }) {
  const [input, setInput] = useState("");

  const fetchData = async () => {
    const endpoint = "https://api.shrtco.de/v2/shorten?url=";
    const stringToShorten = encodeURIComponent(input);
    const finalUrl = endpoint + stringToShorten;
    try {
      const { data } = await axios.get(finalUrl);
      addUrl({
        id: Math.floor(Math.random() * 1000000),
        fullUrl: input,
        shortUrl: data.result.full_short_link,
      });
    } catch (e) {
      alert(e.message);
    }
  };

  const onClick = () => {
    if (searchUrlList(input)) {
      alert(
        `${input} is already searched and the shortened url can be found in the list`
      );
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
