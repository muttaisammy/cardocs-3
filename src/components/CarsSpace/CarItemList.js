import React,{Component} from 'react' ;
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchSingleCar, addTowishlist,removeFromwishlist } from '../../actions';

class CarItemList extends Component{

    constructor(props) {
        super(props);
        this.state={
                isInwishlist:false,
                car:props.car,
                isHovered:false,
            };
    }; 
      

    ToggleCarwishlist(event){
        var car = JSON.parse(event.target.id);
        if(!this.state.isInwishlist){
            this.props.addTowishlist(car);
            this.setState({isInwishlist:true});
        }
        else{  
            this.props.removeFromwishlist(car);
            this.setState({isInwishlist:false});
            
        }
    }

    componentDidMount(){
        var {car}= this.props;
        if(this.props.wishlistproducts.filter(function(e){return e._id === car._id}).length===1){
            this.setState({isInwishlist:true})
        }
    }

    mouseHover(event){
        this.setState({isHovered:true});  
    }

    mouseUnHover(event){
        this.setState({isHovered:false});  
    }



    render(){

        var heartStyle = {};
        if(!this.state.isHovered){
            heartStyle = {
                color: '#d11717',
                fontWeight: 'bold'
            };
        }

        const {car} = this.props;
        return(

            <div className="product-item hover-img">
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-5">
                    <a className="product-img">
                        <img src={`${process.env.PUBLIC_URL}/images/${car.imageName}`} alt="" />
                    </a>
                    </div>
                    <ul className="absolute-caption">
                             <li onClick={()=>this.props.fetchSingleCar(car)}>
                                <Link to={`/softwares/singlproduct`}>
                                <i className="fa fa-search" />View
                                </Link>
                            </li>

                            <li onMouseEnter={this.mouseHover.bind(this)} onMouseLeave={this.mouseUnHover.bind(this)}>
                                    <i id={JSON.stringify(car)} className={this.state.isInwishlist ? "fa fa-heart" : "fa fa-heart-o"} 
                                    style={heartStyle} 
                                    onClick={this.ToggleCarwishlist.bind(this)} 
                                    />WishList
                            </li>
                                     
                        </ul>   
                    <div className="col-sm-12 col-md-7 col-lg-7">
                        <div className="product-caption">
                            <h5 className="product-name" style={{backgroundColor:'#f5f5f5'}}>
                            <a>
                                {car.name}
                            </a>
                            </h5>
                            <ul className="rating">
                                <li className="active"><i className="fa fa-star"></i></li>
                                <li className="active"><i className="fa fa-star"></i></li>
                                <li className="active"><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                            </ul>
                            <b className="product-price color-red">${car.price}</b>
                            <p className="product-txt m-t-lg-10">BEST APPLICATIONS</p>
                            <ul className="static-caption m-t-lg-20">
                                <li><i className="fa fa-clock-o"></i>{car.year}</li>
                                <li><i className="fa fa-tachometer"></i>{car.transition}</li>
                                <li><i className="fa fa-road"></i>13,000</li>
                                
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    } 

};

  function mapStateToProps({ wishlistproducts }) {
    return { wishlistproducts};
}

export default connect(mapStateToProps,{ fetchSingleCar, addTowishlist, removeFromwishlist})(CarItemList) ;
