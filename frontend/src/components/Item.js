const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.date}</h3>
      <p>{item.count}</p>
      {item.beers.map((item) => (
        <BeerTime item={item} />
      ))}
    </div>
  );
};

const BeerTime = ({ item }) => {
  return <p>Time: {item}</p>;
};

export default Item;
