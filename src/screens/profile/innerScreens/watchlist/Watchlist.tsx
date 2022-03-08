import React from "react";
import WatchListCard from "../../../../components/cart/WatchList";
import "./Watchlist.scss";

const Watchlist = () => {
  return (
    <div className="std-bg watchlistWrapper">
      <div className="row m-1">
        <div className="col-9">
          <WatchListCard />
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
