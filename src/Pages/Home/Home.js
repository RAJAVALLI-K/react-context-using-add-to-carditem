import React from "react";
//Components
import Product from "../../Product.json"
import "./Home.css";
//Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//Context/Hooks
import { useContext } from "react";
import { stateContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(stateContext);

  //Add to cart function
  const Addcart = (items) => {
    let q = items.qty++;
    console.log(items);
    let cartbox = [];

    if (state.cartItems.length) {
      cartbox = [...state.cartItems, items];
    } else {
      cartbox = [items];
    }
    dispatch({
      type: "add",
      payload: {
        q,
        cartItems: cartbox.filter((val, id) => {
          return cartbox.indexOf(val) === id;
        }),
      },
    });
  };

  //Favorite function
  const Addfavorite = (items) => {
    let favbox = [];
    if (state.favorite.length) {
      favbox = [...state.favorite, items];
    } else {
      favbox = [items];
    }
    dispatch({
      type: "favorite",
      payload: {
        favorite: favbox.filter((val, id) => {
          return favbox.indexOf(val) === id;
        }),
      }
    });
  };
  let goNextPage = () => {
    navigate(`/cart`);
  }
  let goNext = () => {
    navigate(`/favourite`);
  }
  let goNextDetails = () => {
    navigate(`/details`);
  }
  
  
  return (
    <div className="container">
      <div className="homediv">
        {Product.map((items, i) => {
          return (
            <div key={i} className="cars">
              <h1>{items.name}</h1>
              <p className="detail">{items.id}</p>
              <p className="detail">{items.price}</p>
              <img src={items.img} alt="" className="image"></img>
              <br></br>
              <span className="addcart" onClick={() => Addcart(items)}>
                <AddShoppingCartIcon />
              </span>
              <span className="fav" onClick={() => Addfavorite(items)}>
                <FavoriteBorderIcon />
              </span>
            </div>
          );
        })}
        <div>
          <button onClick={goNextPage}>Go To Card</button>
          <button onClick={goNext}>Go To Favourite</button>
          <button onClick={goNextDetails}>Go To Details</button>
        </div>
      </div>
    </div>

  );
}

export default Home;
