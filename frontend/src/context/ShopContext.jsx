import { createContext } from "react";
import { products } from "../assets/assets";

const ShowContext = createContext();


const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee =10; 
    
    const value = {
        products , currency , delivery_fee

    }

    return (
        <ShowContext.Provider value={value}>
            {props.children}
        </ShowContext.Provider>
    )
}

export default ShopContextProvider;