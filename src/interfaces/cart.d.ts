interface CartInterface{
    // cart schema goes here
}

type CartState={
    cart : CartInterface[]
}

type CartAction={
    type: String,
    cart: CartInterface
}

type DispatchType = (args: CartAction)=> CartAction