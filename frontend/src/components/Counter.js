const Counter = ({ count, countHandler, bloodAlcoholContent }) => {
  return (
    <>
      <div className="content">
        <div className="percent">
          <div style={{ fontSize: "4rem" }}>
            <i
              className="fas fa-xs fa-minus"
              onClick={() => countHandler("minus")}
            ></i>
            <b style={{ fontSize: "8rem" }} className="count">
              {count && count[count.length - 1].count}
            </b>
            <i
              className="fas fa-xs fa-plus"
              onClick={() => countHandler("plus")}
            ></i>
          </div>
        </div>
      </div>

      <Alcohol count={count} bloodAlcoholContent={bloodAlcoholContent} />
    </>
  );
};

const Alcohol = ({ count, bloodAlcoholContent }) => {
  // https://de.wikipedia.org/wiki/Blutalkoholkonzentration
  const { beerSize, bodyWaight, sex } = bloodAlcoholContent;

  const beerSizeNum = +beerSize;
  const bodyWaightNum = +bodyWaight;
  const sexNum = +sex;

  const alcohol = beerSizeNum / (bodyWaightNum * sexNum);
  const factor = count[count.length - 1].count;

  return (
    <div className="panmill">
      <p>{(alcohol * factor).toFixed(2)}‰</p>
    </div>
  );
};

export default Counter;
