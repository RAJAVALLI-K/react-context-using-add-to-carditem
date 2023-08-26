export const initialState = {
    cartItems: [],
    favorite: [],

};

//Switch case
export const stateReducer = (state, acton) => {
    console.log("called");
    
    switch (acton.type) {
        case "add":
            return {
                ...state,
                ...acton.payload,
            };
        case "favorite":
            return {
                ...state,
                ...acton.payload,
            };
        case "remove":
            return {
                ...state,
                cartItems: acton.payload,
            };
        case "removefavorite":
            return {
                ...state,
                favorite: acton.payload,
            };
        case "increase":
            return {
                ...state,
            };
        case "decrease":
            return {
                ...state,
            };
        default:
            return {
                state,
            };
    }
};
