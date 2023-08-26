import React from "react";
//Component
import "./Cart.css";
//Hooks
import { useContext } from "react";
//Icon
import Button from '@mui/material/Button';
//Context
import { stateContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(stateContext);
  //console.log(state);

  //Remove function
  const remove = (items) => {
    let dismiss = state.cartItems.filter((data) => data.id !== items.id);
    console.log(items);
    dispatch({
      type: "remove",
      payload: dismiss,
    });
  };

  //Quantity Increase function
  const increase = (items) => {
    //console.log(items);
    let incr = items.qty++;
    console.log(state);

    dispatch({
      type: "increase",
      payload: incr,
    });
  };

  //Quantity Decrease function
  const decrease = (items) => {
    let decr = items.qty--;
    console.log(state);

    dispatch({
      type: "decrease",
      payload: decr,
    });
    if (decr === 0) {
      remove(items);
      items.qty = 0;
    }
  };
  let goNext = () => {
    navigate(`/favourite`);
  }
  let goToHome = () => {
    navigate(`/`);
  }
  let goNextDetails = () => {
    navigate(`/details`);
  }

  return (
    <div className="cartdiv">
      {state.cartItems.map((items, i) => {
        return (
          <div key={i} className="cars">
            <h1>{items.name}</h1>
            <p className="id">{items.id}</p>
            <p className="price">{items.price}</p>
            <p className="qty">{items.qty}</p>
            <img src={items.img} alt="" className="image"></img>
            <br></br>
            <button className="plus" onClick={() => increase(items)}>
              +
            </button>
            <Button className="remove" variant="outlined" onClick={() => remove(items)}>
              Remove
            </Button>

            <button className="minus" onClick={() => decrease(items)}>
              -
            </button>

          </div>
        );
      })}'
      <div><button onClick={goNext}>Go To Favourite</button>
      <button onClick={goToHome}>Home</button>
      <button onClick={goNextDetails}>Go To Details</button></div>
    </div>
  );
}

export default Cart;