import React from "react";
//Component
import "./Favourite.css";
//Hooks/Context
import { useContext } from "react";
import { stateContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";


const Favourite = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(stateContext);
  const removeFavorite = (items) => {
    let dismiss = state.favorite.filter((data) => data.id !== items.id);
    console.log(items);
    dispatch({
      type: "removefavorite",
      payload: dismiss,
    });
  };

  let goNextPage = () => {
    navigate(`/cart`);
  }
  let goToHome = () => {
    navigate(`/`);
  }
  let goNextDetails = () => {
    navigate(`/details`);
  }

  return (
    <div className="favdiv">
      {state.favorite.map((items, i) => {
        return (
          <div key={i} className="cars">
            <h1>{items.name}</h1>
            <p className="id">{items.id}</p>
            <p className="price">{items.price}</p>
            <p className="qty">{items.qty}</p>
            <img src={items.img} alt="" className="image"></img>
            <button className="removefav" onClick={() => removeFavorite(items)}>
              Remove Favorite
            </button>
            <br></br>
          </div>
        );
      })}
      <div><button onClick={goNextPage}>Go To Card</button>
        <button onClick={goToHome}>Home</button>
        <button onClick={goNextDetails}>Go To Details</button>
      </div>
    </div>
  );
}

export default Favourite;