import React,{Component} from 'react';

class Home extends Component{

    componentDidMount(){
       window.updateCarousel();
       window.reRenderRangeSlider();
    }
    
    render(){
        return(
            <div className="wrap-body-inner">
                <div className="product product-grid product-grid-2 car m-t-lg-90 p-t-sm-35 m-b-lg-20">
                    <div className="heading">
                        <h3>Best Deals</h3>
                    </div>
                    <div className="row">
                        <div
                        id="fifi"
                        className="owl"
                        data-items="3"
                        data-itemsdesktop="2"
                        data-itemsdesktopsmall="2"
                        data-itemstablet="2"
                        data-itemsmobile="1"
                        data-pag="false"
                        data-buttons="true"
                        >
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a>
                                    MacBook Air / <b>New</b>
                                </a>
                                <span className="f-18"> 250,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2020
                                </li>
                                <li>
                                <i className="fa fa-car" />Intel core i7 (2.7 Ghz)
                                </li>
                                <li>
                                <i className="fa fa-road" />16 GB
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/laptopPC.jpeg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a>
                                    ASSUS / <b>X540U</b>
                                </a>
                                <span className="f-18"> 86,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2017
                                </li>
                                <li>
                                <i className="fa fa-car" />Intel core i5
                                </li>
                                <li>
                                <i className="fa fa-road" />8GB
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/laptop.webp`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    Lenovo Ideapad 110 / <b>used</b>
                                </a>
                                <span className="f-18"> 50,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />2013
                                </li>
                                <li>
                                <i className="fa fa-car" />Intel i core i3
                                </li>
                                <li>
                                <i className="fa fa-road" />4GB
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/lenovomonitor.webp`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    Lenovo / <b>24inch</b>
                                </a>
                                <span className="f-18"> 6000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />Monitor
                                </li>
                                <li>
                                <i className="fa fa-car" />new
                                </li>
                                <li>
                                <i className="fa fa-road" />Built in speakers 
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/samsung.jpeg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    Samsung Galaxy / <b>s23 Ultra</b>
                                </a>
                                <span className="f-18"> 157,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />12GB RAM
                                </li>
                                <li>
                                <i className="fa fa-car" />512GB
                                </li>
                                <li>
                                <i className="fa fa-road" />5000mAh
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product-item hover-img">
                            <a   className="product-img">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/macdesktop.jpg`}
                                alt=""
                                />
                            </a>
                            <div className="product-caption">
                                <h4 className="product-name">
                                <a  >
                                    Lenovo monitor / <b>used</b>
                                </a>
                                <span className="f-18"> 6,000</span>
                                </h4>
                            </div>
                            <ul className="absolute-caption">
                                <li>
                                <i className="fa fa-clock-o" />HDMI
                                </li>
                                <li>
                                <i className="fa fa-car" />24 inch
                                </li>
                                <li>
                                <i className="fa fa-road" />Built in speakers
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="banner-item banner-2x banner-bg-9 color-inher m-b-lg-50">
                <h3 className="f-weight-300">
                    We develop quality Applications Make an order !
                </h3>
                <a className="ht-btn ht-btn-default" href="/sellapp">
                    Check out our defining Applications
                </a>
                </div>   
            </div>
        ); 
    }
}

export default Home ;