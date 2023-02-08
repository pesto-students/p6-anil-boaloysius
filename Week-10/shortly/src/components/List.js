import "../css/list.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useContext } from "react";
import CacheContext from "../context/CacheContext";

function List({ items }) {
  const { cache } = useContext(CacheContext);
  return (
    <div className="shortnedList">
      <div className="heading">Cached URLs</div>
      <div className="items">
        {cache.map((item) => (
          <div className="item" key={item.id}>
            <span>{item.fullUrl}</span>
            <span>{item.shortUrl}</span>
            <span>
              <CopyToClipboard text={item.shortUrl}>
                <button>Copy URL</button>
              </CopyToClipboard>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
