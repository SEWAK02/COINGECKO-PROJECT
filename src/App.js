import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Graph from "./Components/Graph";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./Store/Actions/coingeckoActions";
import Heading from "./Components/Heading";

const App = () => {
  const [graphModal, setGraphModal] = useState(false);
  const [idForGraph, setIdForGraph] = useState();
  const [nameChart, setNameChart] = useState();
  const [symbol, setSymbol] = useState();
  const loading = useSelector((state) => state.coinReducer.loading);
  const error = useSelector((state) => state.coinReducer.error);
  const [setSearch, setSelectedSearch] = useState("");

  const coinData = useSelector((state) => state?.coinReducer?.data?.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const mainFilter = () => {
    if (setSearch === "") {
      return coinData;
    }
    return coinData.filter((coin) =>
      coin.name.toLowerCase().includes(setSearch.toLowerCase())
    );
  };
  return (
    <>
      <Navbar
        onChange={(event) => {
          setSelectedSearch(event?.target?.value);
        }}
      />
         {loading && <p>Loading...</p>}
      {error && !loading && <p>{error}</p>}
 
      <div className="container-fluid ">
        {mainFilter()?.map((val) => {
          return (
            <div
              onClick={() => {
                setGraphModal(true);
                setIdForGraph(val?.id);
                setNameChart(val?.name);
                setSymbol(val?.symbol);
              }}
            >
              <Content
                Img={val?.image}
                Name={val?.name}
                Symbol={val?.symbol}
                Price={val?.current_price}
                volume={val?.total_volume}
                marketCap={val?.market_cap}
                priceChange={val.price_change_percentage_24h}
              />
            </div>
          );
        })}
        <Graph
          id={idForGraph}
          coinSymbol={symbol}
          name={nameChart}
          isOpen={graphModal}
          toClose={() => {
            setGraphModal(false);
          }}
        />
      </div>
    </>
  );
};

export default App;
