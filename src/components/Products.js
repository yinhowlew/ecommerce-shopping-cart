import React, { useEffect } from 'react';
import util from '../util';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToCart  } from '../actions'

// const mapStateToProps = state => { 
//     return {
//         products: state.productReducer.filteredProducts,
//         cartItems: state.productReducer.cartItems
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchProducts: () => dispatch(fetchProducts()),
//         addToCart: (a,b) => dispatch(addToCart(a,b))
//     }  // return an object
// } 

const Products = () => {
    // componentDidMount() {
    //     this.props.fetchProducts();
    // }
    const products = useSelector(state => state.productReducer.filteredProducts);
    const cartItems = useSelector(state => state.productReducer.cartItems);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const productItems = products.map(product => (
        <div className="col-md-4" key={product.id}>
            <div className="thumbnail text-center">
                <a 
                    href={`#${product.id}`} 
                    onClick={() => dispatch(addToCart(cartItems, product))}
                    // onClick={()=>this.props.addToCart(this.props.cartItems, product)}
                >
                    <img 
                        src={`${process.env.PUBLIC_URL}/products/${product.sku}_2.jpg`} 
                        alt={product.title} 
                    />
                    <p>{product.title}</p>                        
                </a>
                <b>{util.formatCurrency(product.price)}</b>
                <button 
                    className="btn btn-primary" 
                    onClick={() => dispatch(addToCart(cartItems, product))}
                    // onClick={()=>this.props.addToCart(this.props.cartItems, product)}>
                >
                    Add to cart
                </button>
            </div>
        </div>
    ));

    return (
        <div className="row">
            {productItems}
        </div>
    )
}

export default Products;
// export default connect(mapStateToProps, mapDispatchToProps)(Products);




