import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { CartReducer } from "./reducers/Cart";
import { UserReducer } from "./reducers/User";
import { ProductReducer } from "./reducers/Product";
import { CheckoutReducer } from "./reducers/Checkout";
import { OrderReducer } from "./reducers/Order";
import { UserDetailsReducer } from "./reducers/UserDetails";
import logger from "redux-logger";
import { BuyerPaymentReducer } from "./reducers/BuyerPayment";
import { WatchlistReducer } from "./reducers/Watchlist";

const reducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  checkout: CheckoutReducer,
  orders: OrderReducer,
  userDetails: UserDetailsReducer,
  buyerPaymentInfo : BuyerPaymentReducer,
  productDetail : ProductReducer,
  watchlist: WatchlistReducer,

});

const initialState = {
  user: { currentUser: {} },
  cart: {
    subtotal: 0,
    userCart: []
  },
  orders: {
    orders: [],
  },
  checkout: {
    step: 0,
    steps: [
      {
        name: "Shipping Address",
        state: 0,
      },
      {
        name: "Payment",
        state: 0,
      },
      {
        name: "Place Order",
        state: 0,
      },
    ],
    billingAddress: null,
    deliveryAddress: null,
    paymentMode: null
  },
  userDetails: {
    currAddress: {
      address_line_1: "",
      locality: "",
      city: "",
      country: "",
      state: "",
      pincode: "",
    },
    addressList: [],
  },
  buyerPaymentInfo: {
    BuyerPaymentList: [],
    currOption: null
  },
  watchlist: {
    userWatchlist: [],
  },

  productDetail : {
    product:{
      name : "",
      brand : "",
      price : "",
      available_quantity : "",
      highlights : [],
      technical_details : {},
      buying_options : {
        color: {},
        size : {}
      },
      images : []
    },
    inventoryInfo : {},
    productList : []
    
  }
};

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);

// const store = createStore(reducer, initialState, applyMiddleware(thun));

export default store;
