import React from "react";
import ProductCardHorizontal from "../cards/productCards/ProductCardHorizontal";

const CardContainerVertical = (props:any) => {
    return (
        <div className='position-relative m-1'>
            <ul className='std-ul'>
                {
                    props.products.length>0? props.products.map((product: any, index: number) => {
                        return <li key={index}>
                            <ProductCardHorizontal key={index} index={index} product={product} isCart={props.isCart}/>
                        </li>; 
                    }):<>Nothing to show yet</>
                }
            </ul>
        </div>
    );
};

export default CardContainerVertical;