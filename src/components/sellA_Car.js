import React from 'react';

const  Sell = () => {
    return(
        <div className="wrap-body-inner">
            <div className="hidden-xs">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="ht-breadcrumb pull-left">
                        <li className="home-act"><a  ><i className="fa fa-home"></i></a></li>
                        <li className="home-act"><a  >SOFTWARES</a></li>
                        <li className="active">Build an app for you?</li>
                        </ul>
                    </div>
                </div>
            </div>
                <div>
                    <div className="row">
                        <div className="col-md-9 col-lg-9">
                            <div className="bg-gray-f5 bg1-gray-15 p-lg-30 p-xs-15">
                                <div className="m-b-lg-10">
                                    <div className="heading-1">
                                        <h3>Software Information</h3>
                                    </div>
                                    <p className="m-b-lg-20">Tell Us the requirements of you app !</p>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-item" placeholder="Title"/>
                                                <p className="color1-8 m-t-lg-5 f-14">Maximum 100 characters</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-item" placeholder="Price"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-item" placeholder="Price old"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control h-200 form-item m-b-lg-5" placeholder="Description" rows="3"></textarea>
                                                <p className="color1-8 m-t-lg-5 f-14">Maximum 500 characters</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-b-lg-40">
                                    <div className="heading-1">
                                        <h3>Upload screen shots</h3>
                                    </div>
                                    <p className="m-b-lg-20"></p>
                                    <div className="row">
                                        <div className="col-sm-4 col-md-4 col-lg-3 m-b-lg-20 text-left">
                                            <img src="images/macbook.jpg" alt=""/>
                                            <label htmlFor="file-upload" className="placeholder-img choose-file-upload ">
                                                <i className="fa fa-link m-r-lg-5"></i>Choose file
                                                <input id="file-upload" type="file" className="display-none"/>
                                            </label>
                                            <i className="remove-img fa fa-remove"></i>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-lg-3 m-b-lg-20 text-left">
                                            <img src="images/lenovo_monitor.jpg" alt="" />
                                            <label htmlFor="file-upload1" className="placeholder-img choose-file-upload ">
                                                <i className="fa fa-link m-r-lg-5"></i>Choose file
                                                <input id="file-upload1" type="file" className="display-none"/>
                                            </label>
                                            <i className="remove-img fa fa-remove"></i>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-lg-3 m-b-lg-20 text-left">
                                            <img src="images/laptop.jpg" alt="" />
                                            <label htmlFor="file-upload2" className="placeholder-img choose-file-upload ">
                                                <i className="fa fa-link m-r-lg-5"></i>Choose file
                                                <input id="file-upload2" type="file" className="display-none"/>
                                            </label>
                                            <i className="remove-img fa fa-remove"></i>
                                        </div>
                                        <div className="col-sm-4 col-md-4 col-lg-3 m-b-lg-20 text-left">
                                            <img src="images/samsung.jpg" alt="" />
                                            <label htmlFor="file-upload3" className="placeholder-img choose-file-upload ">
                                                <i className="fa fa-link m-r-lg-5"></i>Choose file
                                                <input id="file-upload3" type="file" className="display-none"/>
                                            </label>
                                            <i className="remove-img fa fa-remove"></i>
                                        </div>
                                    </div>
                                    <a  className="ht-btn ht-btn-default"><i className="fa fa-plus"></i>Add image</a>
                                </div>
                                <div className="m-b-lg-20">
                                    <div className="heading-1">
                                        <h3>App Details </h3>
                                    </div>
                                    <p className="m-b-lg-20"></p>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        What is your budget and portal type?
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                        <li>Desktop</li>
                                                        <li>Tablet</li>
                                                        <li>Mobile </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Type
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                        <li>Desktop website</li>
                                                        <li>Mobile website</li>
                                                        <li>Versatile</li>
                                                        <li>Standalone app</li>
                                                        <li>Drivers</li>
                                                        <li>Middleware</li>
                                                        <li>System software</li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Programming language?
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                                        <li>React</li>
                                                        <li>Typescript</li>
                                                        <li>CSS tailwinds</li>
                                                        <li>Phython</li>
                                                        <li>Laravel</li>
                                                        <li>PHP</li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Databases
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu4">
                                                        <li>MySQL</li>
                                                        <li>MongoDB</li>
                                                        <li>MariaDB</li>
                                                        <li>SQLite</li>
                                                        <li>Redis</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Size of project
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu5">
                                                        <li>Large</li>
                                                        <li>Medium</li>
                                                        <li>Small</li>
                                                        <li>Fixed</li>
                                                        <li>Scalable</li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Additions to project
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu6">
                                                        <li>AutomaticTesting</li>
                                                        <li>Deployment</li>
                                                        <li>Tech support</li>
                                                        <li>Maintenance</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                       
                                       
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Users
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu10">
                                                        <li>0-5</li>
                                                        <li>5-20</li>
                                                        <li>20-100</li>
                                                        <li>over 100</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Budget US $?
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu11">
                                                        <li>0 - 1,000</li>
                                                        <li>1,000 - 10,000</li>
                                                        <li>10,000 - 20,000</li>
                                                        <li>20,000 - 30,000</li>
                                                        <li>30,000 - 40,000</li>
                                                        <li>40,000 - 50,000</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4 m-b-lg-20">
                                            <div className="select-wrapper">
                                                <div className="dropdown">
                                                    <button className="dropdown-toggle form-item" type="button" id="dropdownMenu12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                        Warranty
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu12">
                                                        <li>1 year</li>
                                                        <li>2 year</li>
                                                        <li>3 year</li>
                                                        <li>4 year</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-b-lg-30">
                                    <div className="heading-1">
                                        <h3>Features of Software</h3>
                                    </div>
                                    <p className="m-b-lg-20"></p>
                                    <div className="row">
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check0"/>
                                                <label htmlFor="check0" className="fa fa-check"></label>
                                                Functionality
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check1"/>
                                                <label htmlFor="check1" className="fa fa-check"></label>
                                                Usability
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check2"/>
                                                <label htmlFor="check2" className="fa fa-check"></label>
                                                Efficiency
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check3"/>
                                                <label htmlFor="check3" className="fa fa-check"></label>
                                                Flexibility
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check4"/>
                                                <label htmlFor="check4" className="fa fa-check"></label>
                                                Reliabilty
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check5"/>
                                                <label htmlFor="check5" className="fa fa-check"></label>
                                                Maintainability
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check6"/>
                                                <label htmlFor="check6" className="fa fa-check"></label>
                                                Portability
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check7"/>
                                                <label htmlFor="check7" className="fa fa-check"></label>
                                                Portability
                                            </div>
                                        </div>
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check8"/>
                                                <label htmlFor="check8" className="fa fa-check"></label>
                                                Integrity

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
                                <div className="m-b-lg-20">
                                    <div className="heading-1">
                                        <h3>TECHNICAL SPECIFICATIONS</h3>
                                    </div>
                                    <p className="m-b-lg-20"></p>
                                    <div className="row">
                                        <div className="col-lg-4 text-left">
                                            <div className="checkbox">
                                                <input type="checkbox" value="" id="check15"/>
                                                <label htmlFor="check15" className="fa fa-check"></label>
                                                Software Category
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-b-lg-20">
                                    <div className="heading-1">
                                        <h3>Contact Details</h3>
                                    </div>
                                    <p className="m-b-lg-20"></p>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Your Name"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Phone"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Address"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Website"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Other link"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Country"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="City"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Location"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-item" placeholder="Location"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 m-t-lg-10"><button type="submit" className="ht-btn ht-btn-default">Go next process</button></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="m-t-xs-30">
                                <div className="heading-1">
                                    <h3>Trouble Uploading?</h3>
                                </div>
                                <p>  Contact Us ＠ +254 052417</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );

};


export default Sell ;
