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
    orders: [
      {
        transaction_id: "b1f8g91rbr19f2919ob",
        order_id: "bwo939832f329923g8g",
        delivery_date: "12-2-2022",
        payment_mode: "Net Banking",
        amount: 17941,
        products: [
          {
            product_name: "Jordan for Mens",
            product_id: "621b9e2f0df9ccbd0e2e5155",
            image: "https://picsum.photos/100",
            price: 19999,
            brand: "Jordan",
            payable: 19999,
            quantity: 3,
          },
          {
            product_name: "Jordan for women",
            product_id: "621b9e2f0df9ccbd0e2e5154",
            image: "https://picsum.photos/100",
            price: 29999,
            brand: "Jordan",
            payable: 19999,
            quantity: 1,
          },
          {
            product_name: "Jordan for kids",
            product_id: "621b9e2f0df9ccbd0e2e5152",
            image: "https://picsum.photos/100",
            price: 12999,
            brand: "Jordan",
            payable: 12999,
            quantity: 1,
          },
        ],
      },
      {
        transaction_id: "b1f8g91rbr19f2919ob",
        order_id: "bwo939832f329923g8g",
        delivery_date: "12-2-2022",
        payment_mode: "Net Banking",
        amount: 17941,
        products: [
          {
            product_name: "Jordan for Mens",
            product_id: "621b9e2f0df9ccbd0e2e5155",
            image: "https://picsum.photos/100",
            price: 19999,
            brand: "Jordan",
            payable: 19999,
            quantity: 3,
          },
          {
            product_name: "Jordan for women",
            product_id: "621b9e2f0df9ccbd0e2e5154",
            image: "https://picsum.photos/100",
            price: 29999,
            brand: "Jordan",
            payable: 19999,
            quantity: 1,
          },
          {
            product_name: "Jordan for kids",
            product_id: "621b9e2f0df9ccbd0e2e5152",
            image: "https://picsum.photos/100",
            price: 12999,
            brand: "Jordan",
            payable: 12999,
            quantity: 1,
          },
        ],
      },
      {
        transaction_id: "b1f8g91rbr19f2919ob",
        order_id: "bwo939832f329923g8g",
        delivery_date: "12-2-2022",
        payment_mode: "Net Banking",
        amount: 17941,
        products: [
          {
            product_name: "Jordan for Mens",
            product_id: "621b9e2f0df9ccbd0e2e5155",
            image: "https://picsum.photos/100",
            price: 19999,
            brand: "Jordan",
            payable: 19999,
            quantity: 3,
          },
          {
            product_name: "Jordan for women",
            product_id: "621b9e2f0df9ccbd0e2e5154",
            image: "https://picsum.photos/100",
            price: 29999,
            brand: "Jordan",
            payable: 19999,
            quantity: 1,
          },
          {
            product_name: "Jordan for kids",
            product_id: "621b9e2f0df9ccbd0e2e5152",
            image: "https://picsum.photos/100",
            price: 12999,
            brand: "Jordan",
            payable: 12999,
            quantity: 1,
          },
        ],
      },
    ],
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
    inventoryInfo : {}
    
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
