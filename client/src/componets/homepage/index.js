import React from "react";
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {LOGOUT} from "../../redux/const/actionsTypes"


function HomePage() {
   const dispatch = useDispatch();
   function handleLogOut(e) {
      e.preventDefault();

      dispatch({ type: LOGOUT });
   }

   return <Link onClick={handleLogOut} to="/account/login">Logout</Link>;
}

export default HomePage;
