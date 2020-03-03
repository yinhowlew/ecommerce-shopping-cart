import { 
	FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, SORT_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, GET_LOCAL_CART
} from './constants.js';


export const fetchProducts = () => (dispatch) => {
	  // fetch("http://localhost:8000/products")
   //    .then(res => res.json())
   //    .catch(err =>
      fetch(process.env.PUBLIC_URL + "/db.json")
      .then(res => res.json())
      .then(data => dispatch({
      	type: FETCH_PRODUCTS,
      	payload: data.products
      }))
}

export const filterProducts = (products, size) => (dispatch) => {
	return dispatch({
		type: FILTER_PRODUCTS_BY_SIZE,
		payload: {
			size: size,
			filteredProducts: (size === '') ? products : products.filter(
            a => a.availableSizes.indexOf(size.toUpperCase()) >= 0)
		}
	})
}

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
	// below is an edge case of REACT
	// when making a new copy of array, then updating the original array after sorting 
	// react will recognise change in state and re-render
	// otherwise, even though we updated the state correctly, react doesn't re-render
	const products = filteredProducts.slice();

	if (sort !== "") {
        products.sort((a, b) =>
          sort === "lowestprice"
            ? (a.price > b.price
	          ? 1
	          : -1)
            : (a.price < b.price
           	 ? 1
           	 : -1)
        );
      } else {
        products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }

	return dispatch({
		type: SORT_PRODUCTS,
		payload: {
			sort: sort,
			filteredProducts: products
		}
	})
}

// items are things in cart
// product is what we want to add to cart
export const addToCart = (items, product) => (dispatch) => {
      const cartItems = items.slice();
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        // meaning pushing an object with properties of product and an additional property of count
        // into the array of objects, called cartItems
        cartItems.push({ ...product, count: 1 });
      }
      // localStorage is used so that if user refreshes the page, cart doesn't get refreshed
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return dispatch({
      	type: ADD_TO_CART,
      	payload: {
      		cartItems: cartItems
      	}
      })
}

export const removeFromCart = (items, product) => (dispatch) => {
      // so the new cartItems will exclude the removed item
      const cartItems = items.slice().filter(a => a.id !== product.id);
      // the new localStorage will have the new cartItems
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return dispatch({
      	type: REMOVE_FROM_CART,
      	payload: {
      		cartItems: cartItems
      	}
      })
}

export const getLocalCart = () => (dispatch) => {
	return dispatch({
		type: GET_LOCAL_CART,
		payload: JSON.parse(localStorage.getItem("cartItems"))
	})

    // if (localStorage.getItem("cartItems")) {
    //   this.setState({
    //     cartItems: JSON.parse(localStorage.getItem("cartItems"))
    //   });
    // }
}


