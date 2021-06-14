export const MYSELF = "MYSELF";
export const BASKET = "BASKET";
export const CLEAR_BASKET = "CLEAR_BASKET";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const SEARCH = "SEARCH";
export const DELETE_FROM_BASKET = "DELETE_FROM_BASKET";


export function saveMyself(payload) {
    return { type: MYSELF, payload };
}

export function addToBasket(productId, count) {
  return { type: BASKET, payload: {productId, count} };
}

export function handleRemove(productId) {
  return { type: DELETE_FROM_BASKET, payload: {productId} };
}



export function selectCategory(category) {
  return { type: SELECT_CATEGORY, payload: {category} };
}

export function search(text) {
  return { type: SEARCH, payload: {text} };
}

export function clearBasket() {
  return { type: CLEAR_BASKET };
}

const initialState = {
  myself: null,
  basket: [],
  category: 'all',
  text: null,
};

function rootReducer(state = initialState, action) {


  if (action.type === MYSELF) {
    return Object.assign({}, state, {
        myself: action.payload
    });
  }



  if (action.type === BASKET) {
    let basket = state.basket;

    let itemExists = false;
    basket.forEach((item) => {
      if (item.productId === action.payload.productId) {
        item.count = action.payload.count;
        itemExists = true;
      }
    });

    if (!itemExists) {
      basket = [...state.basket, action.payload]
    }

    return {
      ...state,
      basket: basket,
    };
  }


  if (action.type === DELETE_FROM_BASKET) {
    let basket = [];

    state.basket.forEach((item) => {
      if (item.productId === action.payload.productId) {
        
      } else {
        basket.push(item);
      }
    });

    return {
      ...state,
      basket: basket,
    };
  }
  
  

  if (action.type === CLEAR_BASKET) {
    return {
      ...state,
      basket: [],
    };
  }


  if (action.type === SELECT_CATEGORY) {
    return {
      ...state,
      category: action.payload.category,
    };
  }


  if (action.type === SEARCH) {
    return {
      ...state,
      text: action.payload.text,
    };
  }
  return state;
}

export default rootReducer;