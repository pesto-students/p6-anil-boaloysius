function List({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.fullUrl}</span>
          <span>{item.shortUrl}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;
