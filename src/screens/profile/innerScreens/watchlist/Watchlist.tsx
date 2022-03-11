import React, { useEffect } from "react";
import WatchListCard from "../../../../components/cart/WatchList";
import "./Watchlist.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { initializeWatchlist } from '../../../../redux/actions/Watchlist'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const baseUrl = "http://localhost:9000/api/watchlist";
  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");


  useEffect(() => {
    if (!auth["userid"]) {
      toast.info("Please sign in first");
      navigate("/products");
    } else
      axios
        .post(`${baseUrl}`, {
          userid: auth.userid,
        })
        .then((res) => {
          console.log(res.data)
          dispatch(
            initializeWatchlist(
              res.data.status.watch_list
            )
          );
        });
  }, [])

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
