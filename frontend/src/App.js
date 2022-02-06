import BeerButton from "./components/BeerButton";
import ConfigButton from "./components/ConfigButton";
import Wave from "./components/Wave";
import ResetButton from "./components/ResetButton";
import Counter from "./components/Counter";
import Menu from "./components/Menu";
import Config from "./components/Config";

import React, { useState, useEffect } from "react";

const App = () => {
  const maxBeer = 9;
  const initialFilling = 0.01;

  const genID = () => {
    return Math.floor(Math.random() * 1000 + 1);
  };

  let [menu, setMenu] = useState(false);
  let [config, setConfig] = useState(false);

  let [mainScreen, setMainScreen] = useState(false);

  useEffect(() => {
    if (menu || config) {
      setMainScreen(true);
    } else {
      setMainScreen(false);
    }
  }, [menu, config]);

  let [count, setCount] = useState(() => {
    const data = localStorage.getItem("beerCount");

    const date = new Date();
    const dateString = date.toDateString().trim();

    const id = genID();

    return data !== null
      ? JSON.parse(data)
      : [
          {
            id,
            count: 0,
            date: dateString,
            beers: [],
          },
        ];
  });

  let [bloodAlcoholContent, setBloodAlcoholContent] = useState(() => {
    const data = localStorage.getItem("beerSetting");

    return data !== null
      ? JSON.parse(data)
      : {
          sex: 0.68,
          bodyWaight: 80,
          beerSize: 20,
        };
  });

  let [fill, setFill] = useState(initialFilling);

  useEffect(() => {
    setFill(count[count.length - 1].count / maxBeer + initialFilling);
    localStorage.setItem("beerCount", JSON.stringify(count));
  }, [count]);

  const resetHandler = () => {
    if (count[count.length - 1].count < 1) return;

    const date = new Date();
    const dateString = date.toDateString().trim();

    const id = genID();

    const data = { id, count: 0, date: dateString, beers: [] };
    setCount([...count, data]);
    setFill(initialFilling);
  };

  const countHandler = (input) => {
    const id = count[count.length - 1].id;
    const counter = count[count.length - 1].count;
    const oldDate = count[count.length - 1].date;
    const date = new Date();

    const dateString = counter === 0 ? date.toDateString().trim() : oldDate;
    const Minute = date.getMinutes();

    const time = `${date.getHours()}:${Minute > 9 ? Minute : "0" + Minute}`;

    if (input === "plus") {
      setCount(
        count.map((item) =>
          item.id === id
            ? {
                ...item,
                date: dateString,
                count: item.count + 1,
                beers: [...item.beers, time],
              }
            : item
        )
      );
    } else if (input === "minus" && counter > 0) {
      const beers = count[count.length - 1].beers;
      beers.length = beers.length - 1;
      setCount(
        count.map((item) =>
          item.id === id && item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
        )
      );
    }
  };

  const configHandler = (data) => {
    setBloodAlcoholContent(data);
  };

  useEffect(() => {
    localStorage.setItem("beerSetting", JSON.stringify(bloodAlcoholContent));
  }, [bloodAlcoholContent]);

  useEffect(() => {
    const beer = localStorage.getItem("beerCount");
    if (beer) {
      const data = JSON.parse(beer);
      setCount(data);
    }
  }, []);

  const deleteItem = (id) => {
    if (count.length > 1) {
      setCount(count.filter((item) => item.id !== id));
    }
  };

  const menuItem = (item) => {
    if (item === "config") {
      setConfig(!config);
      setMenu(false);
    } else if (item === "menu") {
      setMenu(!menu);
      setConfig(false);
    }
  };

  const yellow = "#F1B10F";

  return (
    <>
      <ConfigButton menuItem={menuItem} coloring={config ? yellow : "white"} />
      <BeerButton menuItem={menuItem} coloring={menu ? yellow : "white"} />

      {config && (
        <Config
          bloodAlcoholContent={bloodAlcoholContent}
          configHandler={configHandler}
          menuItem={menuItem}
        />
      )}
      {menu && <Menu count={count} deleteItem={deleteItem} />}

      <Wave fill={mainScreen ? 0 : fill} />

      {mainScreen || (
        <Counter
          count={count}
          countHandler={countHandler}
          bloodAlcoholContent={bloodAlcoholContent}
        />
      )}
      {mainScreen || <ResetButton resetHandler={resetHandler} />}
    </>
  );
};

export default App;
