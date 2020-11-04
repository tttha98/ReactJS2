/**stateless */
import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import WWD from "./wwd";
import Contact from "./contact";
import Listcard from "./listcard";
// import Itemcard from "./listcard";  nam trong listcard
import Footer from "./footer";

export default function Baitap2() {
    return (
        <div>
            <Header />
            <Carousel />
            <div className="container">
                <div className="row">
                    <WWD />
                    <Contact />
                </div>
            </div>
            <Listcard />
            <Footer />
        </div>
    )
}