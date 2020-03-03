import React, { useEffect } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import { useDispatch } from 'react-redux';
import { getLocalCart  } from './actions'

import "./App.css";
import Copyright from "./components/Copyright";
 

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getLocalCart: () => dispatch(getLocalCart()),
//     }  
// } 

const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     // size: "",
  //     // sort: "",
  //     cartItems: [],
  //     // products: [],
  //     // filteredProducts: []
  //   };
  // }
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
    dispatch(getLocalCart())
    }
  })

//   componentDidMount() {
//     if (localStorage.getItem("cartItems")) {
//       this.props.getLocalCart();
//     }
// }

    // if fetching from json-live server hosting db.json on port 8000
//     fetch("http://localhost:8000/products")
//       .then(res => res.json())
//       // below is if there is no server, then use local file db.json
//       .catch(err =>
//         fetch("db.json")
//           .then(res => res.json())
//           .then(data => data.products)
//       )
//       .then(data => {
//         this.setState({ 
//           products: data,
//           filteredProducts: data, 
//         });
// // removed: this.listProducts(); added filterProducts in setState instead
//       });
  // }

  // handleRemoveFromCart = (e, product) => {
  //   this.setState(state => {
  //     // so the new cartItems will exclude the removed item
  //     const cartItems = state.cartItems.filter(a => a.id !== product.id);
  //     // the new localStorage will have the new cartItems
  //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //     return { cartItems: cartItems };
  //     // can this written without everything being NESTED??? try
  //   });
  // };

  // handleAddToCart = (e, product) => {
  //   this.setState(state => {
  //     const cartItems = state.cartItems;
  //     let productAlreadyInCart = false;

  //     cartItems.forEach(cp => {
  //       if (cp.id === product.id) {
  //         cp.count += 1;
  //         productAlreadyInCart = true;
  //       }
  //     });

  //     if (!productAlreadyInCart) {
  //       // meaning pushing an object with properties of product and an additional property of count
  //       // into the array of objects, called cartItems
  //       cartItems.push({ ...product, count: 1 });
  //     }
  //     // localStorage is used so that if user refreshes the page, cart doesn't get refreshed
  //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //     return { cartItems: cartItems };
  //   });
  // };

  // listProducts = () => {
  //   this.setState(state => {
  //     if (state.sort !== "") {
  //       state.products.sort((a, b) =>
  //         state.sort === "lowestprice"
  //           ? a.price > b.price
  //             ? 1
  //             : -1
  //           : a.price < b.price
  //           ? 1
  //           : -1
  //       );
  //     } else {
  //       state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
  //     }
  //     if (state.size !== "") {
  //       return {
  //         filteredProducts: state.products.filter(
  //           a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
  //         )
  //       };
  //     }
  //     return { filteredProducts: state.products };
  //   });
  // };

  // handleSortChange = e => {
  //   this.setState({ sort: e.target.value });
  //   this.listProducts();
  // };

  // handleSizeChange = e => {
  //   this.setState({ size: e.target.value });
  //   this.listProducts();
  // };

  // render() {
    return (
      <div className="container">
        <h1>E-commerce Shopping Cart Application</h1>
        <hr />
        <div className="row">
          <div className="col-md-9">
            <Filter
              // count={this.state.filteredProducts.length}
              // handleSortChange={this.handleSortChange}
              // handleSizeChange={this.handleSizeChange}
            />
            <hr />
            <Products
              // products={this.state.filteredProducts}
              // handleAddToCart={this.handleAddToCart}
            />
          </div>
          <div className="col-md-3">
            <Basket
              // cartItems={this.state.cartItems}
              // handleRemoveFromCart={this.handleRemoveFromCart}
            />
            <Copyright />
          </div>
        </div>
      </div>
    );
  }
// }

export default App;
// export default connect(null, mapDispatchToProps)(App);
