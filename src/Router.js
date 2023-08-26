import React, { useReducer } from 'react'
import { stateReducer, initialState } from "./Context/stateReducer"
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom'
import { stateContext } from "./Context/Context";
import Home from "./Pages/Home/Home";
import Favourite from "./Pages/Favourite/Favourite";
import Cart from "./Pages/Cart/Cart";
import Details from "./Pages/Details/Details"

const Router = () => {
    const [state, dispatch] = useReducer(stateReducer, initialState)
    return (
        <div>
            <stateContext.Provider value={{ state, dispatch }}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                        <Route path='/favourite' element={<Favourite />}></Route>
                        <Route path='/details' element={<Details />}></Route>
                        <Route path="*" element={<Navigate to={"/home"}></Navigate>}></Route>
                    </Routes>
                </BrowserRouter>
            </stateContext.Provider>
        </div>
    )
}

export default Router





