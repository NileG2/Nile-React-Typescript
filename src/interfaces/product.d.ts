interface ProductInterface{
    // product schema goes here
}

type ProductState={
    products : ProductInterface[]
}

type ProductAction={
    type: String,
    product: ProductInterface
}

type DispatchType = (args: ProductAction)=> ProductAction