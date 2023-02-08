import { useState } from "react";
import axios from "axios";

function Shorten({ addUrl }) {
  const [input, setInput] = useState("");

  const fetchData = async () => {
    const endpoint = "https://api.shrtco.de/v2/shorten?url=";
    const stringToShorten = encodeURIComponent(input);
    const finalUrl = endpoint + stringToShorten;
    try {
      const { data } = await axios.get(finalUrl);
      addUrl({
        id: Math.floor(Math.random() * 10),
        fullUrl: input,
        shortUrl: data.result.full_short_link,
      });
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <input value={input} onChange={(val) => setInput(val.target.value)} />
      <button onClick={fetchData}>Shorten url</button>
    </>
  );
}

export default Shorten;
