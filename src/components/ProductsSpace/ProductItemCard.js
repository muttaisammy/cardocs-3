import React,{Component} from 'react' ;
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchSingleProduct, addToBasket,addTowishlist,removeFromwishlist } from '../../actions';

class ProductItemCard extends Component{

    constructor(props) {
        super(props);
        this.state={isInwishlist:false,
                    product:props.product,
                    isHovered:false
                    };
    };
      
    /**To add or remove product from wishList */
    ToggleProductwishlist(event){
        var product = JSON.parse(event.target.id);
        if(!this.state.isInwishlist){
            this.props.addTowishlist(product);
            this.setState({isInwishlist:true});
        }
        else{  
            this.props.removeFromwishlist(product);
            this.setState({isInwishlist:false});
            
        }
    }
    /**fcheck fore each product if it belongs to wishlist or not */
    componentDidMount(){
        var product= this.props.product;
        
        if(this.props.wishlistproducts.filter(function(e){return e._id === product._id}).length===1){
            this.setState({isInwishlist:true})
        }
    }
    /**for heart icon style */
    mouseHover(event){
        this.setState({isHovered:true});  
    }
    /**for heart icon style */
    mouseUnHover(event){
        this.setState({isHovered:false});  
    }
    render(){
        var heartStyle = {};
        if(!this.state.isHovered){
            heartStyle = {
                color: '#eae8e2',
                fontWeight: 'bold'
            };
        }

        const {product} = this.props;
        return(
            
            <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="product-item hover-img">
                    <a  className="product-img">
                        <img src={`${process.env.PUBLIC_URL}/images/${product.imageName}`} style={{width:'197.5px',height:'197.5px'}}alt="" />
                    </a>
                    <div className="product-caption">
                        <h4 className="product-name">
                        <a>{product.name}</a>
                        </h4>
                        <ul className="rating">
                            <li className="active">
                                <i className="fa fa-star" />
                            </li>
                            <li className="active">
                                <i className="fa fa-star" />
                            </li>
                            <li className="active">
                                <i className="fa fa-star" />
                            </li>
                            <li>
                                <i className="fa fa-star" />
                            </li>
                            <li>
                                <i className="fa fa-star" />
                            </li>
                        </ul>
                        <div className="product-price-group">
                        <span className="product-price">${product.price}</span>
                        </div>
                        <a className="ht-btn ht-btn-default" onClick={()=>{
                                    this.props.addToBasket(product,1);
                                    }} >Add to cart
                        </a>
                        <ul className="absolute-caption">
                        <li>
                            <i id={JSON.stringify(product)} className={this.state.isInwishlist ? "fa fa-heart" : "fa fa-heart-o"} 
                            style={heartStyle} 
                            onClick={this.ToggleProductwishlist.bind(this)}
                            onMouseEnter={this.mouseHover.bind(this)}
                            onMouseLeave={this.mouseUnHover.bind(this)}
                            />
                        </li>
                        <li>
                            <i className="fa fa-shopping-basket" onClick={()=>{
                                    this.props.addToBasket(product,1);
                                    }}/>
                        </li>
                        <li onClick={()=>this.props.fetchSingleProduct(product)}>
                            <Link to={`/products/singlproduct`}>
                            <i className="fa fa-search" />
                            </Link>
                        </li>
 
                        </ul>
                    </div>
                </div>
            </div>
        );
    } 
    


};

function mapStateToProps({ wishlistproducts }) {
    return { wishlistproducts };
}


    export default connect(mapStateToProps,{fetchSingleProduct, addToBasket, addTowishlist, removeFromwishlist})(ProductItemCard) ;