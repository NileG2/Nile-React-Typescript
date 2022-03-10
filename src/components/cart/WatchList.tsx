import React, { useEffect, useState } from "react";
import CardContainerVertical from "../cardContainer/CardContainerVertical";
import { useSelector } from "react-redux";

const Watchlist = () => {
  const productsFromWatchlist = useSelector(
    (state: any) => state.watchlist.userWatchlist
  );

  return (
    <div className="std-card">
      <p className="p-2 m-0 text-left std-font2">Watch list</p>
      <div className="std-section"></div>
      <CardContainerVertical products={productsFromWatchlist} />
    </div>
  );
};

export default Watchlist;
