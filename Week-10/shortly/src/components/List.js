import "../css/list.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

function List({ items }) {
  return (
    <div className="shortnedList">
      <div className="heading">Cached URLs</div>
      <div className="items">
        {items.map((item) => (
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
