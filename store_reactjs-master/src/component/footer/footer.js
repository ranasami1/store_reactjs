import "./footer.css";
import React from "react";
import logo from "./../../img/pngwing.com (1).png"
const Footer = ()=>{
    return(
        <footer className="py-5">
        <div className="container">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div>
                    <div className="footer-content">
                        <a href="#" className="logo" >
                            <img src={logo} style={{width:30}} alt=""/>
                        </a>
                        <p className="text-gray" style={{maxWidth:"300px"}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, doloribus sit deleniti asperiores officiis odit animi, labore laboriosam sunt deserunt dolores molestias accusantium eius fugiat adipisci et repellendus nihil neque.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="footer-content">
                        <div className="footer-content-header">
                            <h5>Shop</h5>
                        </div>
                        <ul className="list-unstyled">
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="footer-content">
                        <div className="footer-content-header">
                        <h5>Information</h5>
                        </div>
                        <ul className="list-unstyled">
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="footer-content">
                        <div className="footer-content-header">
                        <h5>Policies</h5>
                        </div>
                        <ul className="list-unstyled">
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                            <li>
                                <a id="a" href="#">categories</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center">
    <a  href="mailto:ranasami27@gmail.com">send mail</a>
    </div>
    </footer>
    
    );
}
export default Footer;