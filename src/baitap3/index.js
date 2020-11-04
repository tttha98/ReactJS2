import React, {Component} from "react";
import Header from "./header";
import Carousel from "./carousel";
import ListProduct from "./listproduct";
import Promotion from "./promotion";

export default class Baitap3 extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Header/>
                <Carousel/>
                <ListProduct/>
                <Promotion/>
            </div>
        )
    }
    
}

// export default Baitap3;