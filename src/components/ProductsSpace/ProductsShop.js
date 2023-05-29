import React , {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';

import ProductsContainer from './ProductsContainer';
import ProductDetails from './ProductDetails';

class ProductsShop extends Component{

    constructor(props){
        super(props);
        this.state={
          activePage:'Computer Parts',
        }
    }

    componentDidMount() {
        this.props.fetchProducts('TYRES&WHEELS');
    }

    renderFiltredProducts(activePage){
        this.setState({activePage});
        this.props.fetchProducts(activePage);
    }
    
    
    render(){
       
        return(
            <div className="wrap-body-inner" style={{minHeight: '1200px'}}>
                
                <section className="m-t-lg-30 m-t-xs-0">
                        <div className="row">
                            <div className="col-sm-4 col-md-3 col-lg-3">
                                <div className="category m-b-lg-50 ">
                                    <div className="heading m-b-lg-0">
                                        <h3 className="p-l-lg-20" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                <i className="fa fa-bars"></i>Caterory
                                        </h3>
                                    </div>
                                    <ul className="collapse in" id="collapseExample">
                                       
                                        <li className={this.state.activePage === 'TYRES&WHEELS' ? 'active' : ''}><a onClick={()=>this.renderFiltredProducts('TYRES&WHEELS')} >Desktop Windows PC<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li  className={this.state.activePage === 'BRAKES&DISCS' ? 'active' : ''}><a onClick={()=>this.renderFiltredProducts('BRAKES&DISCS')} >Desktop Unix <i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a >Desktop Mackintosh<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Laptop PC<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Laptop Unix<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Laptop Mackintosh<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Tablet <i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Smart Phones<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Batteries<i className="fa fa-chevron-right pull-right"></i></a></li>
                                        <li><a  >Monitors<i className="fa fa-chevron-right pull-right"></i></a></li>
                                    </ul>
                                </div>
                                <div className="banner-item banner-bg-4 banner-1x color-inher">
                                    <h3 className="f-weight-300"><strong>Cables</strong></h3>
                                    <p></p>
                                    <a className="ht-btn ht-btn-default">Call us for prices</a>
                                    
                                    
 
                                    
                                </div>
                            </div>
                            <BrowserRouter>
                                    <div>
                                    <Route exact path="/products" render={()=><ProductsContainer productsCategory={this.state.activePage} productsList={this.props.products}/>} />
                                    <Route exact path="/products/singlproduct" component={ProductDetails} />
                                    </div>
                            </BrowserRouter>

                        </div>
                </section>
            </div>
        );
    }
}   



function mapStateToProps({ products }) {
    return { products };
}
  
export default connect(mapStateToProps,{fetchProducts})(ProductsShop);
