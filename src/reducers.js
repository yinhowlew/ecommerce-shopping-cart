import { 
	FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, SORT_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, GET_LOCAL_CART
} from './constants.js';

const initialState = {
	products: [],
	filteredProducts: [],
	size: '',
	sort: '',
	cartItems: [],
}

export const productReducer = (state=initialState, action) => {
	switch(action.type) {
		case FETCH_PRODUCTS:   
			return Object.assign({}, state, {
				products: action.payload,
				// below is because Product component uses filteredProducts state to populate
				filteredProducts: action.payload
			})
		case FILTER_PRODUCTS_BY_SIZE:
			return Object.assign({}, state, {
				size: action.payload.size,
				filteredProducts: action.payload.filteredProducts
			})
		case SORT_PRODUCTS:
			return Object.assign({}, state, {
				sort: action.payload.sort,
				filteredProducts: action.payload.filteredProducts
			})
		case ADD_TO_CART:
			return Object.assign({}, state, {
				cartItems: action.payload.cartItems
			})
		case REMOVE_FROM_CART:
			return Object.assign({}, state, {
				cartItems: action.payload.cartItems
			})
		case GET_LOCAL_CART:
			return Object.assign({}, state, {
				cartItems: action.payload
			})
		default: 
			return state; 
	}	
}





    // this.state = {
    //   size: "",
    //   sort: "",
    //   cartItems: [],
    //   products: [],
    //   filteredProducts: []
    // };