import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


class CarDetails extends React.Component {

	componentDidMount(){
		console.log(this.props.selectedCar);
	}

	
    render(){
		console.log(this.props.selectedCar);
		var {name,price,imageName,condition}=this.props.selectedCar;
        return (
            <div className="wrap-body-inner">
						<div className="hidden-xs">
							<div className="row">
								<div className="col-lg-6">
									<ul className="ht-breadcrumb pull-left">
									<li className="home-act"><a><i className="fa fa-home"></i></a></li>
									<li className="home-act"><Link to={"/cars"}>Cars</Link></li>
									
									<li className="active">{name}</li>
									</ul>
								</div>
								<div className="col-lg-6">
									<Link to={"/cars"} style={{width:25}} className="col-sm-1 col-md-1 col-lg-1 p-lg-0 ht-btn ht-btn-default pull-right">
										<i  style={{marginLeft:7}} className="fa fa-remove center"/>
									</Link> 								
								</div>
							</div>
						</div>
						<section className="m-t-lg-30 m-t-xs-0">
							<div className="product_detail no-bg p-lg-0">
								<h3 className="product-name color1-f">{name} / 
									<span className="product-price color-red">${price}.00 <i className="color-9 color1-9"> ( Plus Taxes & Licensing ) </i></span>
									<span className="car-status m-l-lg-10">{condition !==undefined ? condition.toUpperCase() : ''}</span>
								</h3>
								<div className="row">
									<div className="col-md-7 col-lg-8">
										<div className="product-img-lg bg-gray-f5 bg1-gray-15">
											<div className="image-zoom row m-t-lg-5 m-l-lg-ab-5 m-r-lg-ab-5">
												<div className="col-md-12 col-lg-12 p-lg-5">
													<a  href={`${process.env.PUBLIC_URL}/images/${imageName}`}>
														<img  src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt=""/>
													</a>
												</div>
												<div className="col-sm-3 col-md-3 col-lg-3 p-lg-5">
													<a href="images/b-img-2.jpg">
														<img src="../images/b-img-2.jpg" alt=""/>
													</a>
												</div>
												<div className="col-sm-3 col-md-3 col-lg-3 p-lg-5">
													<a href="images/b-img-1.jpg">
														<img src="../images/b-img-1.jpg" alt=""/>
													</a>
												</div>
												<div className="col-sm-3 col-md-3 col-lg-3 p-lg-5">
													<a href="images/b-img-5.jpg">
														<img src="../images/b-img-5.jpg" alt=""/>
													</a>
												</div>
												<div className="col-sm-3 col-md-3 col-lg-3 p-lg-5">
													<a href="images/b-img-10.jpg">
														<img src="../images/b-img-10.jpg" alt=""/>
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-5 col-lg-4">
										<ul className="product_para-1 p-lg-15 bg-gray-f5 bg1-gray-15">
											<li><span>APPLICATION TYPE:</span></li>
											<li><span>ENTERPRISE TYPE :</span></li>
											<li><span> NUMBER USERS:</span></li>
											<li><span> OS TYPE:</span></li>
											<li><span>CLOUD STATUS :</span></li>
											<li><span>PROVIDER :</span></li>
											<li><span>LICENCE TYPE :</span></li>
											<li><span>PAY TYPE :</span></li>
											<li><span>VERSION :</span></li>
											<li><span>REVISION :</span></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="row m-t-lg-30 m-b-lg-50">
								<div className="col-md-8">
									<div className="m-b-lg-30">
										<div className="heading-1"><h3>Overview</h3></div>
											<div className="m-b-lg-30 bg-gray-fa bg1-gray-2 p-lg-30 p-xs-15">
											<p className="color1-9">
											Excellent Software Product </p>
										</div>
									</div>
									<div className="m-b-lg-30">
										<div className="heading-1"><h3>Features & Options</h3></div>
										<div className="bg-gray-fa bg1-gray-2 p-lg-30 p-xs-15">
											<ul className="list-feature">
												<li><i className="fa fa-check"></i>Ease of Use</li>
												<li><i className="fa fa-check"></i>Scheduling Tools</li>
												<li><i className="fa fa-check"></i>Task Management</li>
												<li><i className="fa fa-check"></i>Ability to share externally</li>
												<li><i className="fa fa-check"></i>Real time Reporting</li>
												<li><i className="fa fa-check"></i>Dashboards </li>
												<li><i className="fa fa-check"></i>Graphical reporting Tools</li>
												<li><i className="fa fa-check"></i>Security</li>
												<li><i className="fa fa-check"></i>Professional Interface</li>
												<li><i className="fa fa-check"></i>Customizable</li>
												<li><i className="fa fa-check"></i>Timesheets</li>
												
											</ul>
										</div>
									</div>
									<div className="m-b-lg-0">
										<div className="heading-1"><h3>Technical Specifications</h3></div>
										<div className="bg-gray-fa bg1-gray-2 p-lg-30 p-xs-15">
											<div className="heading-1"><h3 className="f-18">Engine</h3></div>
											<ul className="product_para-1">
												<li><span>Number of Users :</span>4</li>
												<li><span>Open Source :</span> </li>
												<li><span>OS type :</span>Unix</li>
												<li><span>Portal Type :</span>Mobile</li>
												<li><span>Scalability :</span>Open</li>
												<li><span>Vendor media :</span>Download</li>
												<li><span>Language :</span>Open</li>
											</ul>
											<div className="heading-1 m-t-lg-20"><h3 className="f-18">Performance</h3></div>
											<ul className="product_para-1">
												<li><span>Database Types :</span></li>
												<li><span>Open :</span>To Check</li>
											</ul>
											<div className="heading-1 m-t-lg-20"><h3 className="f-18">Mobile OS</h3></div>
											<ul className="product_para-1">
												<li><span>Android :</span>IOS</li>
											</ul>
											<div className="heading-1 m-t-lg-20"><h3 className="f-18">Security</h3></div>
											<ul className="product_para-1">
												<li><span>Level (estimate) :</span>5</li>
												<li><span>Class (estimate) :</span>Classified</li>
											</ul>
											<div className="heading-1 m-t-lg-20"><h3 className="f-18">REQUIREMENTS</h3></div>
											<ul className="product_para-1">
												<li><span> :</span></li>
												<li><span>OS type :</span></li>
												<li><span>Processor Type :</span></li>
												<li><span>RAM :</span></li>
												<li><span>DISK size :</span></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-sm-12 col-md-4 col-lg-4">
									<div className="heading-1">
										<h3><i className="fa fa-info-circle"></i>PRODUCT INFORMATION</h3>
									</div>
									<a href="" className="bg-gray-fa bg1-gray-2 p-lg-15 text-center m-b-lg-20 display-block">
										<img src="../images/logo_w.png" alt=""/>
									</a>
									<h4 className="p-t-lg-0"><a href="">KENSTATE ALLIED</a></h4>
									<div className="clearfix"></div>
									<ul className="list-default m-t-lg-0">
										<li><i className="fa fa-user-circle-o m-r-lg-10  icon"></i>DIRECTOR DEVELOPMENT</li>
										<li><i className="fa fa-phone m-r-lg-10 icon"></i>=+254 724 052 417</li>
										<li><i className="fa fa-envelope-o m-r-lg-10 icon"></i>sales@kenstate.42web.io</li>
										<li><i className="fa fa-home m-r-lg-10 icon"></i>NAIROBI, KENYA</li>
										<li className="view-map"><i className="fa fa-map-marker m-r-lg-10 icon"></i>Click to view Map</li>
										<li><a href="http://www.kenstate.42web.io/"><i className="fa fa-globe m-r-lg-10 icon"></i>http://www.kenstate.42web.io</a></li>
									</ul>
									<div className="m-t-lg-30">
										<div className="heading-1">
											<h3><i className="fa fa-envelope-o"></i>Send message</h3>
										</div>
										<div className="bg-gray-fa bg1-gray-2 p-lg-20">
											<form>
												<div className="form-group">
													<input type="email" className="form-control form-item" placeholder="Email"/>
												</div>
												<div className="form-group">
													<input type="text" className="form-control form-item" placeholder="Phone"/>
												</div>
												<div className="form-group">
													<input type="text" className="form-control form-item" placeholder="Adress"/>
												</div>
												<textarea className="form-control form-item h-200 m-b-lg-10" placeholder="Content" rows="3"></textarea>
												<button type="submit" className="ht-btn ht-btn-default">Send</button>
											</form>
										</div>
									</div>
								</div>
							</div>	
							<div className="product product-grid product-grid-2 car m-b-lg-15">
								<div className="heading">
									<h3>Other Products</h3>
								</div>
								<div className="row">
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="product-item hover-img">
											<a href="" className="product-img">
												<img src="../images/styer.jpg" alt=""/>
											</a>	
											<div className="product-caption">
												<h4 className="product-name">
													<a href="">HOSPITAL MANAGEMENT SYSTEM / <b>GOLD</b></a><span className="f-18"> 150,000</span>
												</h4>
											</div>
											<ul className="absolute-caption">
												<li><i className="fa fa-clock-o"></i>FRONT END</li>
												<li><i className="fa fa-car"></i>BACK END</li>
												<li><i className="fa fa-road"></i>BILLING</li>
											</ul>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="product-item hover-img">
											<a href="" className="product-img">
												<img src="../images/b-img-1.jpg" alt=""/>
											</a>	
											<div className="product-caption">
												<h4 className="product-name">
													<a href="">INSTITUTION MANAGEMENT SYSTEM / <b>SILVER</b></a><span className="f-18"> 100,000</span>
												</h4>
											</div>
											<ul className="absolute-caption">
												<li><i className="fa fa-clock-o"></i>FRONT END</li>
												<li><i className="fa fa-car"></i>BACK END</li>
												<li><i className="fa fa-road"></i>PAYROLL</li>
											</ul>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="product-item hover-img">
											<a href="" className="product-img">
												<img src="../images/b-img-2.jpg" alt=""/>
											</a>	
											<div className="product-caption">
												<h4 className="product-name">
													<a href="">SCHOOL MANAGEMENT SYSTEM / <b>BRONZE</b></a><span className="f-18"> 50,000</span>
												</h4>
											</div>
											<ul className="absolute-caption">
												<li><i className="fa fa-clock-o"></i>ACADEMICS</li>
												<li><i className="fa fa-car"></i>ADMINISTRATION</li>
												<li><i className="fa fa-road"></i>ACCOUNTS</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
        );
    }
};
function mapStateToProps({selectedCar}) {
    return { selectedCar };
}

export default connect(mapStateToProps)(withRouter(CarDetails)) ;


