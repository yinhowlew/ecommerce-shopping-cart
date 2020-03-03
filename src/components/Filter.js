import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts, sortProducts  } from '../actions'


// const mapStateToProps = state => { 
//     return {
//         products: state.productReducer.products,
//         filteredProducts: state.productReducer.filteredProducts,
//         size: state.productReducer.size,
//         sort: state.productReducer.sort
//     }
// }
// !!! FIXED BELOW BECAUSE WE NEED TO ADD PARAMETERS
// const mapDispatchToProps = (dispatch) => {
//     return {
//         filterProducts: (a,b) => dispatch(filterProducts(a,b)),
//         sortProducts: (a,b) => dispatch(sortProducts(a,b))
//     }  
// } 


const Filter = () => {
    const products = useSelector(state => state.productReducer.products);
    const filteredProducts = useSelector(state => state.productReducer.filteredProducts);
    const size = useSelector(state => state.productReducer.size);        
    const sort = useSelector(state => state.productReducer.sort);

    const dispatch = useDispatch();


    return (
        <div className="row">
            <div className="bot-pad col-md-4">
                {`${filteredProducts.length} products found.`}
            </div>
            <div className="bot-pad col-md-4">
                <label>Order by
           <select className="form-control" value={sort} onChange={(e) => dispatch(sortProducts(filteredProducts, e.target.value))}>
                        <option value="">Select</option>
                        <option value="lowestprice">Lowest to highest</option>
                        <option value="highestprice">Highest to lowest</option>
                    </select>
                </label>
            </div>
            <div className="bot-pad col-md-4">
                <label > Filter Size
           <select className="form-control" value={size} onChange={(e) => dispatch(filterProducts(products, e.target.value))}>
                        <option value="">ALL</option>
                        <option value="x">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                </label>
            </div>
        </div>
    )
}

export default Filter;



