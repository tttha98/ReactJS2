import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";

/**
 * statefull
 */

class Baitap1 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="contents">
                <Content/>
                <Sidebar/>
                </div>
                <Footer/>
            </div>// ko dc goi cac the ngang hang ngan cap
        )
    }
}

export default Baitap1;